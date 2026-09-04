const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Create a test student first
  const student = await prisma.student.create({
    data: {
      name: 'Test Student',
      rollNo: 'CS101',
      department: 'Computer Science',
      semester: 3,
      email: 'teststudent@example.com',
    },
  });

  // Create admin login
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.create({
    data: {
      username: 'admin',
      password: adminPassword,
      role: 'admin',
    },
  });

  // Create student login linked to the student record
  const studentPassword = await bcrypt.hash('student123', 10);
  const studentUser = await prisma.user.create({
    data: {
      username: 'teststudent',
      password: studentPassword,
      role: 'student',
      linkedId: student.id,
    },
  });

  console.log('Seed data created:');
  console.log('Admin login -> username: admin, password: admin123');
  console.log('Student login -> username: teststudent, password: student123');
  console.log('Student record:', student);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());