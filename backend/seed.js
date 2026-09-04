const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const departments = ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Electronics'];
const firstNames = ['Aarav', 'Diya', 'Rohan', 'Ananya', 'Vihaan', 'Ishita', 'Arjun', 'Kavya', 'Sai', 'Meera', 'Karthik', 'Priya', 'Rahul', 'Sneha', 'Aditya'];
const lastNames = ['Sharma', 'Patel', 'Reddy', 'Kumar', 'Singh', 'Nair', 'Iyer', 'Gupta', 'Rao', 'Verma'];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {
  // Clear existing data first (careful - this wipes everything)
  await prisma.attendance.deleteMany();
  await prisma.fee.deleteMany();
  await prisma.result.deleteMany();
  await prisma.user.deleteMany();
  await prisma.student.deleteMany();
  await prisma.faculty.deleteMany();

  // Create admin
  const adminPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.create({
    data: { username: 'admin', password: adminPassword, role: 'admin' },
  });

  // Create faculty
  const facultyPassword = await bcrypt.hash('faculty123', 10);
  const faculty = await prisma.faculty.create({
    data: { name: 'Dr. Anil Mehta', department: 'Computer Science' },
  });
  await prisma.user.create({
    data: { username: 'faculty1', password: facultyPassword, role: 'faculty', linkedId: faculty.id },
  });

  // Create 15 students with attendance, fees, results
  for (let i = 1; i <= 15; i++) {
    const name = `${randomFrom(firstNames)} ${randomFrom(lastNames)}`;
    const department = randomFrom(departments);
    const semester = Math.floor(Math.random() * 8) + 1;
    const rollNo = `${department.substring(0, 2).toUpperCase()}${1000 + i}`;

    const student = await prisma.student.create({
      data: {
        name,
        rollNo,
        department,
        semester,
        email: `${name.toLowerCase().replace(' ', '.')}${i}@college.edu`,
      },
    });

    // Login for first 3 students only (for demo)
    if (i <= 3) {
      const studentPassword = await bcrypt.hash('student123', 10);
      await prisma.user.create({
        data: {
          username: `student${i}`,
          password: studentPassword,
          role: 'student',
          linkedId: student.id,
        },
      });
    }

    // Attendance: 10 records per student
    for (let j = 0; j < 10; j++) {
      await prisma.attendance.create({
        data: {
          studentId: student.id,
          subject: randomFrom(['Maths', 'Physics', 'Programming', 'English']),
          date: new Date(2026, 7, j + 1),
          status: Math.random() > 0.2 ? 'present' : 'absent',
        },
      });
    }

    // Fees: 1 record
    const amountDue = 50000;
    const amountPaid = Math.random() > 0.3 ? amountDue : Math.floor(amountDue * 0.5);
    await prisma.fee.create({
      data: {
        studentId: student.id,
        semester,
        amountDue,
        amountPaid,
        status: amountPaid >= amountDue ? 'paid' : 'pending',
      },
    });

    // Results: 3 subjects
    for (const subject of ['Maths', 'Physics', 'Programming']) {
      const marks = Math.floor(Math.random() * 40) + 60;
      const grade = marks >= 90 ? 'A+' : marks >= 80 ? 'A' : marks >= 70 ? 'B' : 'C';
      await prisma.result.create({
        data: { studentId: student.id, subject, semester, marks, grade },
      });
    }
  }

  console.log('✅ Seed complete: 15 students created with attendance, fees, results');
  console.log('Admin login -> admin / admin123');
  console.log('Faculty login -> faculty1 / faculty123');
  console.log('Student logins -> student1, student2, student3 / student123');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());