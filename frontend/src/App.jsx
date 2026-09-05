
import { useState } from 'react'
import './App.css'

const initialStudents = [
  {
    id: 'STU001',
    name: 'Rahul Sharma',
    course: 'Computer Science',
    attendance: 92,
    performance: 'Excellent',
    status: 'Good'
  },
  {
    id: 'STU002',
    name: 'Ananya Patel',
    course: 'Artificial Intelligence',
    attendance: 78,
    performance: 'Good',
    status: 'Normal'
  },
  {
    id: 'STU003',
    name: 'Arjun Kumar',
    course: 'Data Science',
    attendance: 61,
    performance: 'Needs Improvement',
    status: 'At Risk'
  },
  {
    id: 'STU004',
    name: 'Priya Reddy',
    course: 'Artificial Intelligence',
    attendance: 89,
    performance: 'Excellent',
    status: 'Good'
  },
  {
    id: 'STU005',
    name: 'Vikram Singh',
    course: 'Computer Science',
    attendance: 69,
    performance: 'Average',
    status: 'Normal'
  }
]

const initialCourses = [
  {
    code: 'AI101',
    name: 'Introduction to Artificial Intelligence',
    faculty: 'Dr. Kumar',
    credits: 4,
    semester: 'Semester 1'
  },
  {
    code: 'CS102',
    name: 'Data Structures',
    faculty: 'Prof. Sharma',
    credits: 4,
    semester: 'Semester 1'
  },
  {
    code: 'DS201',
    name: 'Machine Learning',
    faculty: 'Dr. Priya',
    credits: 3,
    semester: 'Semester 2'
  },
  {
    code: 'MA103',
    name: 'Engineering Mathematics',
    faculty: 'Prof. Reddy',
    credits: 4,
    semester: 'Semester 1'
  }
]

const initialAttendance = [
  {
    id: 1,
    student: 'Rahul Sharma',
    course: 'Computer Science',
    totalClasses: 40,
    present: 37,
    percentage: 92.5,
    status: 'Good'
  },
  {
    id: 2,
    student: 'Ananya Patel',
    course: 'Artificial Intelligence',
    totalClasses: 40,
    present: 31,
    percentage: 77.5,
    status: 'Normal'
  },
  {
    id: 3,
    student: 'Arjun Kumar',
    course: 'Data Science',
    totalClasses: 40,
    present: 24,
    percentage: 60,
    status: 'At Risk'
  },
  {
    id: 4,
    student: 'Priya Reddy',
    course: 'Artificial Intelligence',
    totalClasses: 40,
    present: 36,
    percentage: 90,
    status: 'Good'
  },
  {
    id: 5,
    student: 'Vikram Singh',
    course: 'Computer Science',
    totalClasses: 40,
    present: 28,
    percentage: 70,
    status: 'Normal'
  }
]

const initialExams = [
  {
    id: 1,
    student: 'Rahul Sharma',
    subject: 'Data Structures',
    internal: 24,
    external: 62,
    total: 86,
    grade: 'A'
  },
  {
    id: 2,
    student: 'Ananya Patel',
    subject: 'Artificial Intelligence',
    internal: 21,
    external: 55,
    total: 76,
    grade: 'B'
  },
  {
    id: 3,
    student: 'Arjun Kumar',
    subject: 'Machine Learning',
    internal: 16,
    external: 42,
    total: 58,
    grade: 'C'
  },
  {
    id: 4,
    student: 'Priya Reddy',
    subject: 'Artificial Intelligence',
    internal: 25,
    external: 61,
    total: 86,
    grade: 'A'
  },
  {
    id: 5,
    student: 'Vikram Singh',
    subject: 'Data Structures',
    internal: 19,
    external: 48,
    total: 67,
    grade: 'B'
  }
]

const initialFees = [
  {
    id: 1,
    student: 'Rahul Sharma',
    total: 120000,
    paid: 120000,
    pending: 0,
    status: 'Paid'
  },
  {
    id: 2,
    student: 'Ananya Patel',
    total: 120000,
    paid: 90000,
    pending: 30000,
    status: 'Partial'
  },
  {
    id: 3,
    student: 'Arjun Kumar',
    total: 120000,
    paid: 60000,
    pending: 60000,
    status: 'Partial'
  },
  {
    id: 4,
    student: 'Priya Reddy',
    total: 120000,
    paid: 120000,
    pending: 0,
    status: 'Paid'
  },
  {
    id: 5,
    student: 'Vikram Singh',
    total: 120000,
    paid: 80000,
    pending: 40000,
    status: 'Partial'
  }
]

const timetable = [
  {
    id: 1,
    day: 'Monday',
    time: '09:00 - 10:00',
    subject: 'Artificial Intelligence',
    faculty: 'Dr. Kumar',
    room: 'A-101'
  },
  {
    id: 2,
    day: 'Monday',
    time: '10:00 - 11:00',
    subject: 'Data Structures',
    faculty: 'Prof. Sharma',
    room: 'A-102'
  },
  {
    id: 3,
    day: 'Monday',
    time: '11:30 - 12:30',
    subject: 'Mathematics',
    faculty: 'Prof. Reddy',
    room: 'B-201'
  },
  {
    id: 4,
    day: 'Tuesday',
    time: '09:00 - 10:00',
    subject: 'Machine Learning',
    faculty: 'Dr. Priya',
    room: 'AI-Lab'
  },
  {
    id: 5,
    day: 'Tuesday',
    time: '10:00 - 11:00',
    subject: 'Data Structures',
    faculty: 'Prof. Sharma',
    room: 'A-102'
  },
  {
    id: 6,
    day: 'Tuesday',
    time: '11:30 - 12:30',
    subject: 'Artificial Intelligence',
    faculty: 'Dr. Kumar',
    room: 'A-101'
  }
]

const menuItems = [
  { icon: '📊', name: 'Dashboard' },
  { icon: '👨‍🎓', name: 'Students' },
  { icon: '📚', name: 'Academics' },
  { icon: '📅', name: 'Attendance' },
  { icon: '📝', name: 'Examinations' },
  { icon: '💰', name: 'Fees' },
  { icon: '🔔', name: 'Notifications' },
  { icon: '🗓️', name: 'Timetable' }
]

function App() {
  const [activePage, setActivePage] = useState('Dashboard')

  const [studentList, setStudentList] = useState(initialStudents)

  const [searchTerm, setSearchTerm] = useState('')

  const [courses, setCourses] = useState(initialCourses)

  const [attendance, setAttendance] = useState(initialAttendance)

  const [exams, setExams] = useState(initialExams)

  const [fees, setFees] = useState(initialFees)

  const [showAttendanceForm, setShowAttendanceForm] = useState(false)

  const [editingAttendance, setEditingAttendance] = useState(null)

  const [newAttendance, setNewAttendance] = useState({
    student: '',
    course: '',
    totalClasses: '',
    present: ''
  })

  const [showExamForm, setShowExamForm] = useState(false)

  const [editingExam, setEditingExam] = useState(null)

  const [newExam, setNewExam] = useState({
    student: '',
    subject: '',
    internal: '',
    external: ''
  })

  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const [paymentData, setPaymentData] = useState({
    student: '',
    amount: ''
  })

  const [showStudentForm, setShowStudentForm] = useState(false)

  const [editingStudent, setEditingStudent] = useState(null)

  const [newStudent, setNewStudent] = useState({
    name: '',
    course: '',
    attendance: '',
    performance: 'Good'
  })

  const [showCourseForm, setShowCourseForm] = useState(false)

  const [editingCourse, setEditingCourse] = useState(null)

  const [newCourse, setNewCourse] = useState({
    code: '',
    name: '',
    faculty: '',
    credits: '',
    semester: 'Semester 1'
  })

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Low Attendance Alert',
      message: 'Arjun Kumar attendance is below 65%.',
      type: 'warning',
      date: 'Today'
    },
    {
      id: 2,
      title: 'Examination Notice',
      message: 'Mid-semester examination results have been updated.',
      type: 'info',
      date: 'Today'
    },
    {
      id: 3,
      title: 'Fee Reminder',
      message: 'Some students have pending fee payments.',
      type: 'warning',
      date: 'Today'
    }
  ])

  const [showNotificationForm, setShowNotificationForm] =
    useState(false)

  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    type: 'info'
  })

  const filteredStudents = studentList.filter((student) => {
    const search = searchTerm.toLowerCase()

    return (
      student.name.toLowerCase().includes(search) ||
      student.id.toLowerCase().includes(search) ||
      student.course.toLowerCase().includes(search)
    )
  })
  // ================= STUDENT FUNCTIONS =================

  const handleStudentChange = (name, value) => {
    setNewStudent({
      ...newStudent,
      [name]: value
    })
  }

  const closeStudentForm = () => {
    setShowStudentForm(false)
    setEditingStudent(null)

    setNewStudent({
      name: '',
      course: '',
      attendance: '',
      performance: 'Good'
    })
  }

  const handleAddStudent = (e) => {
    e.preventDefault()

    if (
      !newStudent.name ||
      !newStudent.course ||
      !newStudent.attendance
    ) {
      alert('Please fill all required fields.')
      return
    }

    const attendanceValue = Number(newStudent.attendance)

    let status = 'Normal'

    if (attendanceValue >= 85) {
      status = 'Good'
    } else if (attendanceValue < 65) {
      status = 'At Risk'
    }

    const newId = `STU${String(studentList.length + 1).padStart(3, '0')}`

    const student = {
      id: newId,
      name: newStudent.name,
      course: newStudent.course,
      attendance: attendanceValue,
      performance: newStudent.performance,
      status: status
    }

    setStudentList([...studentList, student])

    closeStudentForm()
  }

  const openEditStudent = (student) => {
    setEditingStudent(student)

    setNewStudent({
      name: student.name,
      course: student.course,
      attendance: student.attendance,
      performance: student.performance
    })

    setShowStudentForm(true)
  }

  const handleEditStudent = (e) => {
    e.preventDefault()

    const attendanceValue = Number(newStudent.attendance)

    let status = 'Normal'

    if (attendanceValue >= 85) {
      status = 'Good'
    } else if (attendanceValue < 65) {
      status = 'At Risk'
    }

    const updatedList = studentList.map((student) =>
      student.id === editingStudent.id
        ? {
            ...student,
            name: newStudent.name,
            course: newStudent.course,
            attendance: attendanceValue,
            performance: newStudent.performance,
            status: status
          }
        : student
    )

    setStudentList(updatedList)

    closeStudentForm()
  }

  const handleDeleteStudent = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this student?'
    )

    if (confirmDelete) {
      setStudentList(
        studentList.filter((student) => student.id !== id)
      )
    }
  }

  // ================= COURSE FUNCTIONS =================

  const handleCourseChange = (name, value) => {
    setNewCourse({
      ...newCourse,
      [name]: value
    })
  }

  const closeCourseForm = () => {
    setShowCourseForm(false)
    setEditingCourse(null)

    setNewCourse({
      code: '',
      name: '',
      faculty: '',
      credits: '',
      semester: 'Semester 1'
    })
  }

  const handleAddCourse = (e) => {
    e.preventDefault()

    if (
      !newCourse.code ||
      !newCourse.name ||
      !newCourse.faculty ||
      !newCourse.credits
    ) {
      alert('Please fill all required fields.')
      return
    }

    const duplicate = courses.some(
      (course) =>
        course.code.toLowerCase() === newCourse.code.toLowerCase()
    )

    if (duplicate) {
      alert('A course with this code already exists.')
      return
    }

    const course = {
      code: newCourse.code,
      name: newCourse.name,
      faculty: newCourse.faculty,
      credits: Number(newCourse.credits),
      semester: newCourse.semester
    }

    setCourses([...courses, course])

    closeCourseForm()
  }

  const openEditCourse = (course) => {
    setEditingCourse(course)

    setNewCourse({
      code: course.code,
      name: course.name,
      faculty: course.faculty,
      credits: course.credits,
      semester: course.semester
    })

    setShowCourseForm(true)
  }

  const handleEditCourse = (e) => {
    e.preventDefault()

    const updatedList = courses.map((course) =>
      course.code === editingCourse.code
        ? {
            ...course,
            name: newCourse.name,
            faculty: newCourse.faculty,
            credits: Number(newCourse.credits),
            semester: newCourse.semester
          }
        : course
    )

    setCourses(updatedList)

    closeCourseForm()
  }

  const handleDeleteCourse = (code) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this course?'
    )

    if (confirmDelete) {
      setCourses(courses.filter((course) => course.code !== code))
    }
  }

  // ================= ATTENDANCE FUNCTIONS =================

  const computeAttendanceStatus = (percentage) => {
    if (percentage >= 85) return 'Good'
    if (percentage < 65) return 'At Risk'
    return 'Normal'
  }

  const handleAttendanceChange = (name, value) => {
    setNewAttendance({
      ...newAttendance,
      [name]: value
    })
  }

  const closeAttendanceForm = () => {
    setShowAttendanceForm(false)
    setEditingAttendance(null)

    setNewAttendance({
      student: '',
      course: '',
      totalClasses: '',
      present: ''
    })
  }

  const handleAddAttendance = (e) => {
    e.preventDefault()

    if (
      !newAttendance.student ||
      !newAttendance.course ||
      !newAttendance.totalClasses ||
      !newAttendance.present
    ) {
      alert('Please fill all required fields.')
      return
    }

    const total = Number(newAttendance.totalClasses)
    const present = Number(newAttendance.present)

    if (present > total) {
      alert('Present classes cannot exceed total classes.')
      return
    }

    const percentage = Math.round((present / total) * 1000) / 10

    const newId =
      attendance.length > 0
        ? Math.max(...attendance.map((record) => record.id)) + 1
        : 1

    const record = {
      id: newId,
      student: newAttendance.student,
      course: newAttendance.course,
      totalClasses: total,
      present: present,
      percentage: percentage,
      status: computeAttendanceStatus(percentage)
    }

    setAttendance([...attendance, record])

    closeAttendanceForm()
  }

  const openEditAttendance = (record) => {
    setEditingAttendance(record)

    setNewAttendance({
      student: record.student,
      course: record.course,
      totalClasses: record.totalClasses,
      present: record.present
    })

    setShowAttendanceForm(true)
  }

  const handleEditAttendance = (e) => {
    e.preventDefault()

    const total = Number(newAttendance.totalClasses)
    const present = Number(newAttendance.present)

    if (present > total) {
      alert('Present classes cannot exceed total classes.')
      return
    }

    const percentage = Math.round((present / total) * 1000) / 10

    const updatedList = attendance.map((record) =>
      record.id === editingAttendance.id
        ? {
            ...record,
            student: newAttendance.student,
            course: newAttendance.course,
            totalClasses: total,
            present: present,
            percentage: percentage,
            status: computeAttendanceStatus(percentage)
          }
        : record
    )

    setAttendance(updatedList)

    closeAttendanceForm()
  }

  const handleDeleteAttendance = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this attendance record?'
    )

    if (confirmDelete) {
      setAttendance(
        attendance.filter((record) => record.id !== id)
      )
    }
  }

  // ================= EXAMINATION FUNCTIONS =================

  const computeGrade = (total) => {
    if (total >= 85) return 'A'
    if (total >= 70) return 'B'
    if (total >= 50) return 'C'
    return 'D'
  }

  const handleExamChange = (name, value) => {
    setNewExam({
      ...newExam,
      [name]: value
    })
  }

  const closeExamForm = () => {
    setShowExamForm(false)
    setEditingExam(null)

    setNewExam({
      student: '',
      subject: '',
      internal: '',
      external: ''
    })
  }

  const handleAddExam = (e) => {
    e.preventDefault()

    if (
      !newExam.student ||
      !newExam.subject ||
      !newExam.internal ||
      !newExam.external
    ) {
      alert('Please fill all required fields.')
      return
    }

    const internal = Number(newExam.internal)
    const external = Number(newExam.external)

    if (internal > 30 || external > 70) {
      alert('Internal marks max is 30 and external marks max is 70.')
      return
    }

    const total = internal + external

    const newId =
      exams.length > 0
        ? Math.max(...exams.map((exam) => exam.id)) + 1
        : 1

    const exam = {
      id: newId,
      student: newExam.student,
      subject: newExam.subject,
      internal: internal,
      external: external,
      total: total,
      grade: computeGrade(total)
    }

    setExams([...exams, exam])

    closeExamForm()
  }

  const openEditExam = (exam) => {
    setEditingExam(exam)

    setNewExam({
      student: exam.student,
      subject: exam.subject,
      internal: exam.internal,
      external: exam.external
    })

    setShowExamForm(true)
  }

  const handleEditExam = (e) => {
    e.preventDefault()

    const internal = Number(newExam.internal)
    const external = Number(newExam.external)

    if (internal > 30 || external > 70) {
      alert('Internal marks max is 30 and external marks max is 70.')
      return
    }

    const total = internal + external

    const updatedList = exams.map((exam) =>
      exam.id === editingExam.id
        ? {
            ...exam,
            student: newExam.student,
            subject: newExam.subject,
            internal: internal,
            external: external,
            total: total,
            grade: computeGrade(total)
          }
        : exam
    )

    setExams(updatedList)

    closeExamForm()
  }

  const handleDeleteExam = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this exam record?'
    )

    if (confirmDelete) {
      setExams(exams.filter((exam) => exam.id !== id))
    }
  }

  // ================= FEE / PAYMENT FUNCTIONS =================

  const openPaymentForm = (studentName) => {
    setPaymentData({
      student: studentName || (fees[0] ? fees[0].student : ''),
      amount: ''
    })

    setShowPaymentForm(true)
  }

  const closePaymentForm = () => {
    setShowPaymentForm(false)

    setPaymentData({
      student: '',
      amount: ''
    })
  }

  const handleRecordPayment = (e) => {
    e.preventDefault()

    if (!paymentData.student || !paymentData.amount) {
      alert('Please fill all fields.')
      return
    }

    const amount = Number(paymentData.amount)

    if (amount <= 0) {
      alert('Enter a valid payment amount.')
      return
    }

    const updatedFees = fees.map((fee) => {
      if (fee.student !== paymentData.student) {
        return fee
      }

      const newPaid = Math.min(fee.paid + amount, fee.total)
      const newPending = fee.total - newPaid

      return {
        ...fee,
        paid: newPaid,
        pending: newPending,
        status: newPending === 0 ? 'Paid' : 'Partial'
      }
    })

    setFees(updatedFees)

    closePaymentForm()
  }

  // ================= NOTIFICATION FUNCTIONS =================

  const handleNotificationChange = (e) => {
    setNewNotification({
      ...newNotification,
      [e.target.name]: e.target.value
    })
  }

  const addNotification = (e) => {
    e.preventDefault()

    if (
      !newNotification.title ||
      !newNotification.message
    ) {
      alert('Please fill all fields.')
      return
    }

    const notification = {
      id: notifications.length + 1,
      title: newNotification.title,
      message: newNotification.message,
      type: newNotification.type,
      date: new Date().toLocaleDateString()
    }

    setNotifications([
      notification,
      ...notifications
    ])

    setNewNotification({
      title: '',
      message: '',
      type: 'info'
    })

    setShowNotificationForm(false)
  }

  // ================= PAGE DESCRIPTION =================

  const getPageDescription = () => {
    const descriptions = {
      Dashboard:
        'Overview of your student management system',

      Students:
        'Manage student records and information',

      Academics:
        'Manage courses, faculty and academic information',

      Attendance:
        'Monitor student attendance records',

      Examinations:
        'Manage examination marks and grades',

      Fees:
        'Track student fee payments',

      Notifications:
        'Important alerts and announcements',

      Timetable:
        'View weekly class timetable'
    }

    return descriptions[activePage]
  }

  // ================= DASHBOARD =================

  const renderDashboard = () => {
    const goodStudents = studentList.filter(
      (student) => student.status === 'Good'
    ).length

    const riskStudents = studentList.filter(
      (student) => student.status === 'At Risk'
    ).length

    return (
      <>
        <div className="stats">

          <div className="card">
            <div className="card-icon blue">
              👨‍🎓
            </div>

            <div>
              <p>Total Students</p>

              <h2>{studentList.length}</h2>

              <small className="positive">
                ↑ 12% this year
              </small>
            </div>
          </div>


          <div className="card">
            <div className="card-icon green">
              📚
            </div>

            <div>
              <p>Total Courses</p>

              <h2>{courses.length}</h2>

              <small className="positive">
                Active courses
              </small>
            </div>
          </div>


          <div className="card">
            <div className="card-icon purple">
              📅
            </div>

            <div>
              <p>Good Standing</p>

              <h2>{goodStudents}</h2>

              <small>
                Students performing well
              </small>
            </div>
          </div>


          <div className="card">
            <div className="card-icon red">
              ⚠️
            </div>

            <div>
              <p>At Risk</p>

              <h2>{riskStudents}</h2>

              <small className="negative">
                Needs attention
              </small>
            </div>
          </div>

        </div>


        <div className="dashboard-grid">

          <div className="panel">

            <div className="panel-header">

              <div>
                <h2>Attendance Overview</h2>

                <p>
                  Average attendance by month
                </p>
              </div>

              <select>
                <option>2026</option>
                <option>2025</option>
              </select>

            </div>


            <div className="chart">

              <div className="bar-container">
                <div
                  className="bar"
                  style={{ height: '70%' }}
                >
                  70%
                </div>

                <small>Jan</small>
              </div>


              <div className="bar-container">
                <div
                  className="bar"
                  style={{ height: '78%' }}
                >
                  78%
                </div>

                <small>Feb</small>
              </div>


              <div className="bar-container">
                <div
                  className="bar"
                  style={{ height: '82%' }}
                >
                  82%
                </div>

                <small>Mar</small>
              </div>


              <div className="bar-container">
                <div
                  className="bar"
                  style={{ height: '76%' }}
                >
                  76%
                </div>

                <small>Apr</small>
              </div>


              <div className="bar-container">
                <div
                  className="bar"
                  style={{ height: '88%' }}
                >
                  88%
                </div>

                <small>May</small>
              </div>


              <div className="bar-container">
                <div
                  className="bar"
                  style={{ height: '91%' }}
                >
                  91%
                </div>

                <small>Jun</small>
              </div>

            </div>

          </div>


          <div className="panel">

            <div className="panel-header">

              <div>
                <h2>Recent Alerts</h2>

                <p>
                  Important notifications
                </p>
              </div>

            </div>


            <div className="alert-item">

              <div className="alert-icon">
                ⚠️
              </div>

              <div>
                <strong>
                  Low Attendance
                </strong>

                <p>
                  Arjun Kumar - 60%
                </p>
              </div>

            </div>


            <div className="alert-item">

              <div className="alert-icon">
                💰
              </div>

              <div>
                <strong>
                  Pending Fees
                </strong>

                <p>
                  3 students have pending fees
                </p>
              </div>

            </div>


            <div className="alert-item">

              <div className="alert-icon">
                📝
              </div>

              <div>
                <strong>
                  Exam Results
                </strong>

                <p>
                  Results updated today
                </p>
              </div>

            </div>

          </div>

        </div>


        <div className="panel students-panel">

          <div className="panel-header">

            <div>
              <h2>Recent Students</h2>

              <p>
                Latest student records
              </p>
            </div>

            <button
              onClick={() =>
                setActivePage('Students')
              }
            >
              View All
            </button>

          </div>


          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Student Name</th>
                  <th>Course</th>
                  <th>Attendance</th>
                  <th>Performance</th>
                  <th>Status</th>
                </tr>
              </thead>


              <tbody>

                {studentList
                  .slice(0, 5)
                  .map((student) => (

                    <tr key={student.id}>

                      <td>
                        {student.id}
                      </td>

                      <td>
                        {student.name}
                      </td>

                      <td>
                        {student.course}
                      </td>

                      <td>
                        {student.attendance}%
                      </td>

                      <td>
                        {student.performance}
                      </td>

                      <td>

                        <span
                          className={`status ${
                            student.status === 'Good'
                              ? 'good'
                              : student.status === 'At Risk'
                                ? 'risk'
                                : 'normal'
                          }`}
                        >
                          {student.status}
                        </span>

                      </td>

                    </tr>

                  ))}

              </tbody>

            </table>

          </div>

        </div>
      </>
    )
  }
  // ================= STUDENTS PAGE =================

  const renderStudents = () => {
    return (
      <div className="panel">

        <div className="panel-header students-tools">

          <div>
            <h2>Student Management</h2>
            <p>
              Add, edit, search and delete student records
            </p>
          </div>

          <div className="student-actions">

            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            <button
              className="primary-btn"
              onClick={() =>
                setShowStudentForm(true)
              }
            >
              + Add Student
            </button>

          </div>

        </div>


        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Attendance</th>
                <th>Performance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>


            <tbody>

              {filteredStudents.map((student) => (

                <tr key={student.id}>

                  <td>{student.id}</td>

                  <td>{student.name}</td>

                  <td>{student.course}</td>

                  <td>
                    {student.attendance}%
                  </td>

                  <td>
                    {student.performance}
                  </td>

                  <td>

                    <span
                      className={`status ${
                        student.status === 'Good'
                          ? 'good'
                          : student.status === 'At Risk'
                            ? 'risk'
                            : 'normal'
                      }`}
                    >
                      {student.status}
                    </span>

                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          openEditStudent(student)
                        }
                      >
                        ✏️
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDeleteStudent(
                            student.id
                          )
                        }
                      >
                        🗑️
                      </button>

                    </div>

                  </td>

                </tr>

              ))}


              {filteredStudents.length === 0 && (

                <tr>

                  <td
                    colSpan="7"
                    className="empty-message"
                  >
                    No students found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    )
  }


  // ================= ACADEMICS PAGE =================

  const renderAcademics = () => {
    return (
      <div className="panel">

        <div className="panel-header">

          <div>
            <h2>Academic Courses</h2>

            <p>
              Courses, faculty and credit information
            </p>
          </div>

          <button
            className="primary-btn"
            onClick={() => setShowCourseForm(true)}
          >
            + Add Course
          </button>

        </div>


        <div className="course-grid">

          {courses.map((course) => (

            <div
              className="course-card"
              key={course.code}
            >

              <div className="course-card-top">

                <div className="course-icon">
                  📚
                </div>

                <div className="action-buttons">

                  <button
                    className="edit-btn"
                    onClick={() => openEditCourse(course)}
                  >
                    ✏️
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDeleteCourse(course.code)
                    }
                  >
                    🗑️
                  </button>

                </div>

              </div>


              <div>

                <span className="course-code">
                  {course.code}
                </span>

                <h3>
                  {course.name}
                </h3>

                <p>
                  <strong>Faculty:</strong>{' '}
                  {course.faculty}
                </p>

                <p>
                  <strong>Credits:</strong>{' '}
                  {course.credits}
                </p>

                <span className="semester">
                  {course.semester}
                </span>

              </div>

            </div>

          ))}


          {courses.length === 0 && (
            <div className="empty-message">
              No courses found.
            </div>
          )}

        </div>

      </div>
    )
  }


  // ================= ATTENDANCE PAGE =================

  const renderAttendance = () => {

    const avgAttendance =
      attendance.length > 0
        ? (
            attendance.reduce(
              (sum, record) => sum + record.percentage,
              0
            ) / attendance.length
          ).toFixed(1)
        : '0.0'

    const goodCount = attendance.filter(
      (record) => record.status === 'Good'
    ).length

    const atRiskCount = attendance.filter(
      (record) => record.status === 'At Risk'
    ).length

    return (
      <div className="panel">

        <div className="panel-header">

          <div>
            <h2>Attendance Management</h2>

            <p>
              Monitor student attendance
            </p>
          </div>

          <button
            className="primary-btn"
            onClick={() => setShowAttendanceForm(true)}
          >
            + Mark Attendance
          </button>

        </div>


        <div className="attendance-summary">

          <div>
            <span>
              Average Attendance
            </span>

            <strong>
              {avgAttendance}%
            </strong>
          </div>


          <div>
            <span>
              Good Attendance
            </span>

            <strong>
              {goodCount} Student{goodCount === 1 ? '' : 's'}
            </strong>
          </div>


          <div>
            <span>
              At Risk
            </span>

            <strong>
              {atRiskCount} Student{atRiskCount === 1 ? '' : 's'}
            </strong>
          </div>

        </div>


        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Total Classes</th>
                <th>Present</th>
                <th>Attendance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>


            <tbody>

              {attendance.map((record) => (

                <tr key={record.id}>

                  <td>
                    {record.student}
                  </td>

                  <td>
                    {record.course}
                  </td>

                  <td>
                    {record.totalClasses}
                  </td>

                  <td>
                    {record.present}
                  </td>

                  <td>
                    <strong>
                      {record.percentage}%
                    </strong>
                  </td>

                  <td>

                    <span
                      className={`status ${
                        record.status === 'Good'
                          ? 'good'
                          : record.status === 'At Risk'
                            ? 'risk'
                            : 'normal'
                      }`}
                    >
                      {record.status}
                    </span>

                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          openEditAttendance(record)
                        }
                      >
                        ✏️
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDeleteAttendance(record.id)
                        }
                      >
                        🗑️
                      </button>

                    </div>

                  </td>

                </tr>

              ))}


              {attendance.length === 0 && (

                <tr>

                  <td
                    colSpan="7"
                    className="empty-message"
                  >
                    No attendance records found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    )
  }


  // ================= EXAMINATIONS PAGE =================

  const renderExaminations = () => {
    return (
      <div className="panel">

        <div className="panel-header">

          <div>

            <h2>
              Examination Results
            </h2>

            <p>
              Student marks, totals and grades
            </p>

          </div>

          <button
            className="primary-btn"
            onClick={() => setShowExamForm(true)}
          >
            + Add Marks
          </button>

        </div>


        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Student</th>
                <th>Subject</th>
                <th>Internal</th>
                <th>External</th>
                <th>Total</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>

            </thead>


            <tbody>

              {exams.map((exam) => (

                <tr key={exam.id}>

                  <td>
                    {exam.student}
                  </td>

                  <td>
                    {exam.subject}
                  </td>

                  <td>
                    {exam.internal}
                  </td>

                  <td>
                    {exam.external}
                  </td>

                  <td>
                    <strong>
                      {exam.total}/100
                    </strong>
                  </td>

                  <td>
                    <span className="grade-badge">
                      {exam.grade}
                    </span>
                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() => openEditExam(exam)}
                      >
                        ✏️
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDeleteExam(exam.id)
                        }
                      >
                        🗑️
                      </button>

                    </div>

                  </td>

                </tr>

              ))}


              {exams.length === 0 && (

                <tr>

                  <td
                    colSpan="7"
                    className="empty-message"
                  >
                    No exam records found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    )
  }


  // ================= FEES PAGE =================

  const renderFees = () => {

    const totalFees = fees.reduce(
      (sum, fee) => sum + fee.total,
      0
    )

    const totalPaid = fees.reduce(
      (sum, fee) => sum + fee.paid,
      0
    )

    const totalPending = fees.reduce(
      (sum, fee) => sum + fee.pending,
      0
    )


    return (
      <>

        <div className="stats">

          <div className="card">

            <div className="card-icon blue">
              💰
            </div>

            <div>

              <p>Total Fees</p>

              <h2>
                ₹{totalFees.toLocaleString()}
              </h2>

            </div>

          </div>


          <div className="card">

            <div className="card-icon green">
              ✅
            </div>

            <div>

              <p>Total Paid</p>

              <h2>
                ₹{totalPaid.toLocaleString()}
              </h2>

            </div>

          </div>


          <div className="card">

            <div className="card-icon red">
              ⏳
            </div>

            <div>

              <p>Total Pending</p>

              <h2>
                ₹{totalPending.toLocaleString()}
              </h2>

            </div>

          </div>

        </div>


        <div className="panel">

          <div className="panel-header">

            <div>

              <h2>
                Fee Management
              </h2>

              <p>
                Track student fee payments
              </p>

            </div>

            <button
              className="primary-btn"
              onClick={() => openPaymentForm()}
            >
              + Record Payment
            </button>

          </div>


          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>Student</th>
                  <th>Total Fees</th>
                  <th>Paid</th>
                  <th>Pending</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>

              </thead>


              <tbody>

                {fees.map((fee) => (

                  <tr key={fee.id}>

                    <td>
                      {fee.student}
                    </td>

                    <td>
                      ₹{fee.total.toLocaleString()}
                    </td>

                    <td>
                      ₹{fee.paid.toLocaleString()}
                    </td>

                    <td>
                      ₹{fee.pending.toLocaleString()}
                    </td>

                    <td>

                      <span
                        className={`status ${
                          fee.status === 'Paid'
                            ? 'good'
                            : 'normal'
                        }`}
                      >
                        {fee.status}
                      </span>

                    </td>

                    <td>

                      <button
                        className="edit-btn"
                        disabled={fee.pending === 0}
                        onClick={() =>
                          openPaymentForm(fee.student)
                        }
                      >
                        💳 Pay
                      </button>

                    </td>

                  </tr>

                ))}


                {fees.length === 0 && (

                  <tr>

                    <td
                      colSpan="6"
                      className="empty-message"
                    >
                      No fee records found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </>
    )
  }
  // ================= NOTIFICATIONS PAGE =================

  const renderNotifications = () => {

    return (
      <>

        <div className="panel">

          <div className="panel-header">

            <div>
              <h2>Notifications</h2>

              <p>
                Manage important announcements and updates
              </p>
            </div>

            <button
              className="primary-btn"
              onClick={() => setShowNotificationForm(true)}
            >
              + New Notification
            </button>

          </div>


          <div className="notification-list">

            {notifications.length === 0 ? (

              <div className="empty-message">
                No notifications available.
              </div>

            ) : (

              notifications.map((notification) => (

                <div
                  className="notification-card"
                  key={notification.id}
                >

                  <div className="notification-big-icon">
                    🔔
                  </div>

                  <div className="notification-content">

                    <h3>
                      {notification.title}
                    </h3>

                    <p>
                      {notification.message}
                    </p>

                    <small>
                      {notification.date}
                    </small>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </>
    )
  }



  // ================= TIMETABLE PAGE =================

  const renderTimetable = () => {

    const fullTimetable = [
      ...timetable,

      {
        id: 7,
        day: 'Wednesday',
        time: '09:00 - 10:00',
        subject: 'Data Structures',
        room: 'Room 204',
        faculty: 'Prof. Sharma'
      },

      {
        id: 8,
        day: 'Wednesday',
        time: '11:00 - 12:00',
        subject: 'Engineering Mathematics',
        room: 'Room 105',
        faculty: 'Prof. Reddy'
      },

      {
        id: 9,
        day: 'Thursday',
        time: '10:00 - 11:00',
        subject: 'Artificial Intelligence',
        room: 'AI Lab',
        faculty: 'Dr. Kumar'
      },

      {
        id: 10,
        day: 'Thursday',
        time: '14:00 - 15:00',
        subject: 'Machine Learning',
        room: 'ML Lab',
        faculty: 'Dr. Priya'
      },

      {
        id: 11,
        day: 'Friday',
        time: '09:00 - 10:00',
        subject: 'Engineering Mathematics',
        room: 'Room 105',
        faculty: 'Prof. Reddy'
      },

      {
        id: 12,
        day: 'Friday',
        time: '11:00 - 12:00',
        subject: 'Data Structures',
        room: 'Room 204',
        faculty: 'Prof. Sharma'
      }
    ]


    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ]


    return (
      <>

        <div className="panel">

          <div className="panel-header">

            <div>

              <h2>
                Weekly Timetable
              </h2>

              <p>
                View your weekly class schedule
              </p>

            </div>

          </div>


          <div className="timetable-grid">

            {days.map((day) => {

              const dayClasses =
                fullTimetable.filter(
                  (item) => item.day === day
                )


              return (

                <div
                  className="day-column"
                  key={day}
                >

                  <div className="day-header">
                    {day}
                  </div>


                  {dayClasses.length === 0 ? (

                    <div className="empty-day">
                      No classes
                    </div>

                  ) : (

                    dayClasses.map((item) => (

                      <div
                        className="class-card"
                        key={item.id}
                      >

                        <strong>
                          {item.subject}
                        </strong>

                        <p>
                          🕐 {item.time}
                        </p>

                        <p>
                          📍 {item.room}
                        </p>

                        <small>
                          {item.faculty}
                        </small>

                      </div>

                    ))

                  )}

                </div>

              )

            })}

          </div>

        </div>

      </>
    )
  }



  // ================= PAGE SWITCHER =================

  const renderActivePage = () => {

    switch (activePage) {

      case 'Dashboard':
        return renderDashboard()

      case 'Students':
        return renderStudents()

      case 'Academics':
        return renderAcademics()

      case 'Attendance':
        return renderAttendance()

      case 'Examinations':
        return renderExaminations()

      case 'Fees':
        return renderFees()

      case 'Notifications':
        return renderNotifications()

      case 'Timetable':
        return renderTimetable()

      default:
        return renderDashboard()
    }
  }



  // ================= MAIN UI =================

  return (

    <div className="app">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        <div className="logo">

          <div className="logo-icon">
            🎓
          </div>

          <div>

            <h2>
              Student ERP
            </h2>

            <span>
              Integrated Management
            </span>

          </div>

        </div>


        <nav>

          {menuItems.map((item) => (

            <a
              key={item.name}
              className={
                activePage === item.name
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActivePage(item.name)
              }
            >

              <span>
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </a>

          ))}

        </nav>


        <div className="sidebar-bottom">

          <a
            onClick={() =>
              alert('Settings module coming soon!')
            }
          >
            ⚙️ Settings
          </a>

        </div>

      </aside>



      {/* ================= MAIN CONTENT ================= */}

      <main className="main">

        <div className="topbar">

          <div>

            <h1>
              {activePage}
            </h1>

            <p>
              {getPageDescription()}
            </p>

          </div>


          <div className="profile">

            <div className="notification">
              🔔
            </div>


            <div className="avatar">
              SR
            </div>


            <div>

              <strong>
                Admin
              </strong>

              <small>
                Administrator
              </small>

            </div>

          </div>

        </div>


        {/* CURRENT PAGE */}

        {renderActivePage()}

      </main>



      {/* ================= STUDENT MODAL ================= */}

      {showStudentForm && (

        <div
          className="modal-overlay"
          onClick={closeStudentForm}
        >

          <div
            className="modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <h2>
                {editingStudent
                  ? 'Edit Student'
                  : 'Add New Student'}
              </h2>

              <button
                onClick={closeStudentForm}
              >
                ✕
              </button>

            </div>


            <form
              onSubmit={
                editingStudent
                  ? handleEditStudent
                  : handleAddStudent
              }
            >

              <label>
                Student Name
              </label>

              <input
                type="text"
                placeholder="Enter student name"
                value={newStudent.name}
                onChange={(e) =>
                  handleStudentChange(
                    'name',
                    e.target.value
                  )
                }
                required
              />


              <label>
                Course
              </label>

              <select
                value={newStudent.course}
                onChange={(e) =>
                  handleStudentChange(
                    'course',
                    e.target.value
                  )
                }
                required
              >

                <option value="">
                  Select Course
                </option>

                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>

                <option value="Computer Science">
                  Computer Science
                </option>

                <option value="Data Science">
                  Data Science
                </option>

              </select>


              <label>
                Attendance %
              </label>

              <input
                type="number"
                min="0"
                max="100"
                placeholder="Enter attendance"
                value={newStudent.attendance}
                onChange={(e) =>
                  handleStudentChange(
                    'attendance',
                    e.target.value
                  )
                }
                required
              />


              <label>
                Performance
              </label>

              <select
                value={newStudent.performance}
                onChange={(e) =>
                  handleStudentChange(
                    'performance',
                    e.target.value
                  )
                }
              >

                <option value="Excellent">
                  Excellent
                </option>

                <option value="Good">
                  Good
                </option>

                <option value="Average">
                  Average
                </option>

                <option value="Needs Improvement">
                  Needs Improvement
                </option>

              </select>


              <div className="modal-buttons">

                <button
                  type="button"
                  onClick={closeStudentForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  {editingStudent
                    ? 'Update Student'
                    : 'Add Student'}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}



      {/* ================= COURSE MODAL ================= */}

      {showCourseForm && (

        <div
          className="modal-overlay"
          onClick={closeCourseForm}
        >

          <div
            className="modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <h2>
                {editingCourse
                  ? 'Edit Course'
                  : 'Add New Course'}
              </h2>

              <button
                onClick={closeCourseForm}
              >
                ✕
              </button>

            </div>


            <form
              onSubmit={
                editingCourse
                  ? handleEditCourse
                  : handleAddCourse
              }
            >

              <label>
                Course Code
              </label>

              <input
                type="text"
                placeholder="e.g. CS103"
                value={newCourse.code}
                onChange={(e) =>
                  handleCourseChange(
                    'code',
                    e.target.value
                  )
                }
                disabled={!!editingCourse}
                required
              />


              <label>
                Course Name
              </label>

              <input
                type="text"
                placeholder="Enter course name"
                value={newCourse.name}
                onChange={(e) =>
                  handleCourseChange(
                    'name',
                    e.target.value
                  )
                }
                required
              />


              <label>
                Faculty
              </label>

              <input
                type="text"
                placeholder="Enter faculty name"
                value={newCourse.faculty}
                onChange={(e) =>
                  handleCourseChange(
                    'faculty',
                    e.target.value
                  )
                }
                required
              />


              <label>
                Credits
              </label>

              <input
                type="number"
                min="1"
                max="6"
                placeholder="Enter credits"
                value={newCourse.credits}
                onChange={(e) =>
                  handleCourseChange(
                    'credits',
                    e.target.value
                  )
                }
                required
              />


              <label>
                Semester
              </label>

              <select
                value={newCourse.semester}
                onChange={(e) =>
                  handleCourseChange(
                    'semester',
                    e.target.value
                  )
                }
              >

                <option value="Semester 1">
                  Semester 1
                </option>

                <option value="Semester 2">
                  Semester 2
                </option>

                <option value="Semester 3">
                  Semester 3
                </option>

                <option value="Semester 4">
                  Semester 4
                </option>

              </select>


              <div className="modal-buttons">

                <button
                  type="button"
                  onClick={closeCourseForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  {editingCourse
                    ? 'Update Course'
                    : 'Add Course'}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}



      {/* ================= ATTENDANCE MODAL ================= */}

      {showAttendanceForm && (

        <div
          className="modal-overlay"
          onClick={closeAttendanceForm}
        >

          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <h2>
                {editingAttendance
                  ? 'Edit Attendance Record'
                  : 'Mark Attendance'}
              </h2>

              <button onClick={closeAttendanceForm}>
                ✕
              </button>

            </div>


            <form
              onSubmit={
                editingAttendance
                  ? handleEditAttendance
                  : handleAddAttendance
              }
            >

              <label>
                Student Name
              </label>

              <input
                type="text"
                placeholder="Enter student name"
                value={newAttendance.student}
                onChange={(e) =>
                  handleAttendanceChange(
                    'student',
                    e.target.value
                  )
                }
                required
              />


              <label>
                Course
              </label>

              <select
                value={newAttendance.course}
                onChange={(e) =>
                  handleAttendanceChange(
                    'course',
                    e.target.value
                  )
                }
                required
              >

                <option value="">
                  Select Course
                </option>

                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>

                <option value="Computer Science">
                  Computer Science
                </option>

                <option value="Data Science">
                  Data Science
                </option>

              </select>


              <label>
                Total Classes
              </label>

              <input
                type="number"
                min="1"
                placeholder="Enter total classes"
                value={newAttendance.totalClasses}
                onChange={(e) =>
                  handleAttendanceChange(
                    'totalClasses',
                    e.target.value
                  )
                }
                required
              />


              <label>
                Present
              </label>

              <input
                type="number"
                min="0"
                placeholder="Enter classes attended"
                value={newAttendance.present}
                onChange={(e) =>
                  handleAttendanceChange(
                    'present',
                    e.target.value
                  )
                }
                required
              />


              <div className="modal-buttons">

                <button
                  type="button"
                  onClick={closeAttendanceForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  {editingAttendance
                    ? 'Update Record'
                    : 'Mark Attendance'}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}



      {/* ================= EXAM MODAL ================= */}

      {showExamForm && (

        <div
          className="modal-overlay"
          onClick={closeExamForm}
        >

          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <h2>
                {editingExam ? 'Edit Marks' : 'Add Marks'}
              </h2>

              <button onClick={closeExamForm}>
                ✕
              </button>

            </div>


            <form
              onSubmit={
                editingExam ? handleEditExam : handleAddExam
              }
            >

              <label>
                Student Name
              </label>

              <input
                type="text"
                placeholder="Enter student name"
                value={newExam.student}
                onChange={(e) =>
                  handleExamChange('student', e.target.value)
                }
                required
              />


              <label>
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject name"
                value={newExam.subject}
                onChange={(e) =>
                  handleExamChange('subject', e.target.value)
                }
                required
              />


              <label>
                Internal Marks (out of 30)
              </label>

              <input
                type="number"
                min="0"
                max="30"
                placeholder="Enter internal marks"
                value={newExam.internal}
                onChange={(e) =>
                  handleExamChange('internal', e.target.value)
                }
                required
              />


              <label>
                External Marks (out of 70)
              </label>

              <input
                type="number"
                min="0"
                max="70"
                placeholder="Enter external marks"
                value={newExam.external}
                onChange={(e) =>
                  handleExamChange('external', e.target.value)
                }
                required
              />


              <div className="modal-buttons">

                <button
                  type="button"
                  onClick={closeExamForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  {editingExam ? 'Update Marks' : 'Add Marks'}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}



      {/* ================= PAYMENT MODAL ================= */}

      {showPaymentForm && (

        <div
          className="modal-overlay"
          onClick={closePaymentForm}
        >

          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <h2>
                Record Payment
              </h2>

              <button onClick={closePaymentForm}>
                ✕
              </button>

            </div>


            <form onSubmit={handleRecordPayment}>

              <label>
                Student
              </label>

              <select
                value={paymentData.student}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    student: e.target.value
                  })
                }
                required
              >

                <option value="">
                  Select Student
                </option>

                {fees.map((fee) => (

                  <option
                    key={fee.id}
                    value={fee.student}
                  >
                    {fee.student} (Pending: ₹
                    {fee.pending.toLocaleString()})
                  </option>

                ))}

              </select>


              <label>
                Amount (₹)
              </label>

              <input
                type="number"
                min="1"
                placeholder="Enter payment amount"
                value={paymentData.amount}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    amount: e.target.value
                  })
                }
                required
              />


              <div className="modal-buttons">

                <button
                  type="button"
                  onClick={closePaymentForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Record Payment
                </button>

              </div>

            </form>

          </div>

        </div>

      )}



      {/* ================= NOTIFICATION MODAL ================= */}

      {showNotificationForm && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowNotificationForm(false)
          }
        >

          <div
            className="modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <h2>
                New Notification
              </h2>

              <button
                onClick={() =>
                  setShowNotificationForm(false)
                }
              >
                ✕
              </button>

            </div>


            <form onSubmit={addNotification}>

              <label>
                Notification Title
              </label>

              <input
                type="text"
                placeholder="Enter notification title"
                value={newNotification.title}
                onChange={(e) =>
                  setNewNotification({
                    ...newNotification,
                    title: e.target.value
                  })
                }
                required
              />


              <label>
                Message
              </label>

              <textarea
                placeholder="Enter notification message"
                value={newNotification.message}
                onChange={(e) =>
                  setNewNotification({
                    ...newNotification,
                    message: e.target.value
                  })
                }
                required
              />


              <div className="modal-buttons">

                <button
                  type="button"
                  onClick={() =>
                    setShowNotificationForm(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Publish Notification
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>

  )
}

export default App
