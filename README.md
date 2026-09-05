# STUDENT--ERP--HACKATHON
ERP-Based Student Management System - Hackathon Project

cd
# CampusERP – ERP-based Integrated Student Management System

## 1. Project Overview

CampusERP is an ERP-based Integrated Student Management System designed to centralize and manage major academic and administrative activities of a college.

The system integrates:

- Student records
- Faculty information
- Attendance
- Fees
- Examinations
- Results
- Reports
- Analytics
- Role-based access control

The main goal is to replace disconnected spreadsheets and legacy systems with one centralized platform.

---

## 2. Problem Statement

Many colleges manage student information using separate spreadsheets and disconnected systems for admissions, attendance, fees, examinations and results.

This creates problems such as:

- Duplicate student records
- Data inconsistency
- Manual data entry
- Difficult reconciliation
- Delayed report generation
- Limited access control
- Difficulty tracking students at academic risk

CampusERP provides a unified solution for managing these activities from a single system.

---

## 3. Objectives

The objectives of CampusERP are:

1. Centralize student information.
2. Manage attendance efficiently.
3. Track student fee payments and outstanding amounts.
4. Manage examinations and marks.
5. Calculate grades and academic performance.
6. Provide role-based access.
7. Generate PDF and Excel reports.
8. Provide dashboards and analytics.
9. Identify students who may require academic attention.
10. Reduce manual administrative work.

---

## 4. Key Features

### Student Management

- Add student records
- Update student information
- Search students
- View complete student profiles
- Manage department and course information

### Attendance Management

- Record attendance
- Calculate attendance percentage
- View subject-wise attendance
- Identify students with low attendance

### Fee Management

- Record total fees
- Record paid fees
- Calculate outstanding fees
- Display fee payment status
- Generate fee reports

### Examination Management

- Create examinations
- Add subjects
- Record marks
- View examination details
- Generate examination reports

### Result Management

- Store subject marks
- Calculate grades
- Calculate SGPA/CGPA
- Generate marksheets
- View academic performance

### Dashboard and Analytics

The dashboard can display:

- Total students
- Total faculty
- Attendance statistics
- Fee collection
- Pending fees
- Examination statistics
- Academic performance
- At-risk students

### Reports

The system supports:

- Student Report
- Attendance Report
- Fee Report
- Examination Report
- Result/Marksheet Report
- At-Risk Student Report
- Department Analytics Report
- Academic Transcript

Reports can be exported as PDF or Excel.

---

## 5. User Roles

### Admin

The administrator has complete access to the system.

Admin can:

- Manage students
- Manage faculty
- Manage departments
- Manage subjects
- Manage attendance
- Manage fees
- Manage examinations
- Manage results
- Generate reports
- View analytics

### Faculty

Faculty members can:

- View assigned subjects
- Record attendance
- Update marks
- View student academic information
- Generate relevant academic reports

### Student

Students can:

- View their profile
- View attendance
- View fee status
- View examination results
- View academic performance
- Download available reports

Students cannot modify administrative records.

---

## 6. Technology Stack

### Frontend

- React
- HTML
- CSS
- JavaScript

### Backend

- Python
- Django
- Django REST Framework

### Database

- PostgreSQL

SQLite can also be used during initial development and testing.

### Authentication

- JWT-based authentication
- Role-based authorization

### Report Generation

- ReportLab for PDF reports
- openpyxl for Excel reports

### Development Tools

- Visual Studio Code
- Git
- GitHub

---

## 7. System Architecture

The basic architecture is:

```text
+-----------------------+
|       React UI        |
|     Web Frontend      |
+-----------+-----------+
            |
            | REST API
            v
+-----------------------+
| Django REST Framework |
|       Backend         |
+-----------+-----------+
            |
            v
+-----------------------+
|      PostgreSQL       |
|       Database        |
+-----------------------+

            |
            v
+-----------------------+
|    Report Services    |
|     PDF / Excel       |
+-----------------------+
