const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'hackathon_secret_key';

// ---------- MIDDLEWARE ----------
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = user;
    next();
  });
}

function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied' });
    }
    next();
  };
}

// ---------- TEST ROUTE ----------
app.get('/', (req, res) => {
  res.json({ message: 'ERP backend is running' });
});

// ---------- AUTH ----------
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user.id, role: user.role, linkedId: user.linkedId },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({ token, role: user.role, username: user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ---------- STUDENTS ----------
app.get('/api/students', authenticateToken, async (req, res) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

app.get('/api/students/:id', authenticateToken, async (req, res) => {
  const student = await prisma.student.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { attendance: true, fees: true, results: true },
  });
  if (!student) return res.status(404).json({ error: 'Student not found' });
  res.json(student);
});

app.post('/api/students', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const { name, rollNo, department, semester, email } = req.body;
    const student = await prisma.student.create({
      data: { name, rollNo, department, semester: parseInt(semester), email },
    });
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not create student' });
  }
});

app.put('/api/students/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const { name, department, semester, email } = req.body;
    const student = await prisma.student.update({
      where: { id: parseInt(req.params.id) },
      data: { name, department, semester: parseInt(semester), email },
    });
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update student' });
  }
});

app.delete('/api/students/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    await prisma.student.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Student deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not delete student' });
  }
});

// ---------- ATTENDANCE ----------
app.post('/api/attendance', authenticateToken, authorizeRoles('admin', 'faculty'), async (req, res) => {
  try {
    const { studentId, subject, date, status } = req.body;
    const record = await prisma.attendance.create({
      data: { studentId: parseInt(studentId), subject, date: new Date(date), status },
    });
    res.json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not mark attendance' });
  }
});

app.get('/api/attendance/student/:studentId', authenticateToken, async (req, res) => {
  const records = await prisma.attendance.findMany({
    where: { studentId: parseInt(req.params.studentId) },
  });
  res.json(records);
});

// ---------- FEES ----------
app.post('/api/fees', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const { studentId, semester, amountDue, amountPaid, status } = req.body;
    const fee = await prisma.fee.create({
      data: {
        studentId: parseInt(studentId),
        semester: parseInt(semester),
        amountDue: parseFloat(amountDue),
        amountPaid: parseFloat(amountPaid),
        status,
      },
    });
    res.json(fee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not create fee record' });
  }
});

app.get('/api/fees/student/:studentId', authenticateToken, async (req, res) => {
  const fees = await prisma.fee.findMany({
    where: { studentId: parseInt(req.params.studentId) },
  });
  res.json(fees);
});

// ---------- RESULTS ----------
app.post('/api/results', authenticateToken, authorizeRoles('admin', 'faculty'), async (req, res) => {
  try {
    const { studentId, subject, semester, marks, grade } = req.body;
    const result = await prisma.result.create({
      data: {
        studentId: parseInt(studentId),
        subject,
        semester: parseInt(semester),
        marks: parseFloat(marks),
        grade,
      },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not create result' });
  }
});

app.get('/api/results/student/:studentId', authenticateToken, async (req, res) => {
  const results = await prisma.result.findMany({
    where: { studentId: parseInt(req.params.studentId) },
  });
  res.json(results);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));