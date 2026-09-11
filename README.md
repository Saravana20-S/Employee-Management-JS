# Employee Management System

A responsive **Employee Management System** built using **HTML5, CSS3, and Vanilla JavaScript**. The application allows users to add, view, search, filter, update, and delete employee information through a dynamic and user-friendly interface.

The project is designed to demonstrate practical frontend development concepts including **DOM manipulation, JavaScript OOP, array methods, form validation, exception handling, localStorage, Flexbox, CSS Grid, Media Queries, and Git**.

---

## 📌 Project Overview

The Employee Management System provides a simple interface for managing employee records.

Users can:

* Add new employees
* View employee details
* Search employees
* Filter employees by department
* Update employee information
* Delete employees
* View employee statistics
* Persist employee data using browser localStorage

---

## 🎯 Objectives

The main objectives of this project are:

* Practice HTML5 page structure.
* Build responsive layouts using CSS3.
* Use Flexbox and CSS Grid for page layouts.
* Implement responsive design using Media Queries.
* Understand JavaScript variables, conditions, functions, and loops.
* Work with arrays and objects.
* Implement JavaScript classes and objects using OOP.
* Practice `forEach()`, `map()`, `filter()`, `reduce()`, `find()`, and `some()`.
* Perform DOM manipulation using JavaScript.
* Handle browser events.
* Implement form validation.
* Handle runtime errors using `try...catch`.
* Store application data using `localStorage`.
* Practice Git version control.

---

## 🛠️ Technologies Used

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| HTML5           | Application structure         |
| CSS3            | Styling and responsive design |
| JavaScript ES6+ | Application logic             |
| DOM API         | Dynamic UI manipulation       |
| LocalStorage    | Data persistence              |
| Git             | Version control               |
| IntelliJ IDEA   | Development environment       |
| Google Chrome   | Testing and debugging         |

---

## 📂 Project Structure

```text
EmployeeManagementSystem/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── employee.js
│   ├── data.js
│   ├── validation.js
│   ├── ui.js
│   └── app.js
│
├── assets/
│   └── images/
│
├── README.md
│
└── .gitignore
```

---

## 📄 File Responsibilities

### `index.html`

Contains the main application structure:

* Header
* Navigation
* Employee registration form
* Search and filter section
* Statistics section
* Employee cards
* Footer

---

### `css/style.css`

Contains all styling and responsive design.

It implements:

* CSS3
* Box model
* Flexbox
* CSS Grid
* Typography
* Buttons
* Cards
* Form styling
* Responsive layouts
* Media Queries
* Hover effects

---

### `js/employee.js`

Contains the `Employee` class.

Example:

```javascript
export class Employee {

    constructor(
        id,
        name,
        email,
        department,
        salary,
        gender,
        joiningDate
    ) {

        this.id = id;
        this.name = name;
        this.email = email;
        this.department = department;
        this.salary = Number(salary);
        this.gender = gender;
        this.joiningDate = joiningDate;
    }
}
```

This demonstrates JavaScript Object-Oriented Programming.

---

### `js/data.js`

Responsible for:

* Initial employee data
* Loading employee data
* Saving employee data
* Reading data from localStorage
* Resetting employee data

The application uses:

```javascript
localStorage
JSON.stringify()
JSON.parse()
map()
```

for data persistence.

---

### `js/validation.js`

Responsible for employee form validation.

It validates:

* Required fields
* Employee ID format
* Unique Employee ID
* Employee name
* Email
* Salary

Example Employee ID:

```text
EMP101
EMP102
EMP103
```

---

### `js/ui.js`

Responsible for dynamically updating the user interface.

It handles:

* Creating employee cards
* Displaying employees
* Updating statistics
* Updating employee count
* Formatting salary values

DOM methods used include:

```javascript
getElementById()
createElement()
appendChild()
querySelector()
textContent
innerHTML
classList
```

---

### `js/app.js`

The main application file.

It handles:

* Form submission
* Adding employees
* Updating employees
* Editing employees
* Deleting employees
* Searching employees
* Filtering employees
* Event handling
* Error handling
* Refreshing the UI

---

# ✨ Features

## 1. Employee Registration

Users can register employees using the employee form.

The form contains:

* Employee ID
* Employee Name
* Email
* Department
* Salary
* Gender
* Joining Date

---

## 2. Employee Validation

The application validates employee information before adding or updating a record.

### Employee ID

Must follow the format:

```text
EMP101
```

Invalid:

```text
ABC101
101
EMP
```

---

### Unique Employee ID

Duplicate employee IDs are not allowed.

Example:

```text
EMP101
```

cannot be added if `EMP101` already exists.

---

### Name Validation

Names can contain letters and spaces.

Valid:

```text
Rahul Kumar
Priya Sharma
```

Invalid:

```text
Rahul123
Priya@123
```

---

### Email Validation

The system checks for a valid email format.

Example:

```text
rahul@gmail.com
```

---

### Salary Validation

Salary must be greater than zero.

Valid:

```text
50000
75000
100000
```

Invalid:

```text
0
-5000
```

---

# 🔎 Search

Users can search employees using:

* Employee ID
* Employee Name
* Department

Example:

```text
Rahul
```

or:

```text
EMP101
```

or:

```text
IT
```

The project uses the JavaScript `filter()` method.

Example:

```javascript
employees.filter(employee =>
    employee.name
        .toLowerCase()
        .includes(searchText)
);
```

---

# 🔽 Department Filtering

Employees can be filtered by:

* All Departments
* IT
* HR
* Finance
* Marketing

The user can also combine search and department filtering.

---

# ✏️ Edit Employee

Users can click the **Edit** button on an employee card.

The existing employee information is automatically loaded into the form.

The user can modify the information and click:

```text
Update Employee
```

---

# 🗑️ Delete Employee

Users can delete an employee using the **Delete** button.

Before deletion, the application asks for confirmation.

Example:

```text
Are you sure you want to delete Rahul Kumar?
```

---

# 📊 Employee Statistics

The application calculates:

### Total Employees

Uses:

```javascript
employees.length
```

### Average Salary

Uses:

```javascript
reduce()
```

### Highest Salary

Uses:

```javascript
map()
Math.max()
```

### Lowest Salary

Uses:

```javascript
map()
Math.min()
```

Example:

```text
Total Employees     4
Average Salary      ₹52,500
Highest Salary      ₹60,000
Lowest Salary       ₹45,000
```

---

# 💾 LocalStorage

Employee data is stored in the browser using:

```javascript
localStorage
```

Therefore, employee records remain available even after refreshing the browser.

Data is stored using:

```javascript
localStorage.setItem()
```

and retrieved using:

```javascript
localStorage.getItem()
```

Objects are converted to JSON using:

```javascript
JSON.stringify()
```

and converted back using:

```javascript
JSON.parse()
```

---

# ⚠️ Exception Handling

The application uses JavaScript exception handling:

```javascript
try {

    // Application logic

} catch (error) {

    // Error handling

}
```

This is used for handling unexpected situations during:

* Employee creation
* Employee update
* Employee deletion
* localStorage operations

---

# 🧩 JavaScript Concepts Demonstrated

## Variables

```javascript
const employee = getFormData();
let editingEmployeeId = null;
```

---

## Arrays

```javascript
const employees = [];
```

---

## Objects

Employee information is represented using objects.

```javascript
{
    id: "EMP101",
    name: "Rahul Kumar",
    department: "IT",
    salary: 50000
}
```

---

## Classes

```javascript
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
```

---

## Arrow Functions

```javascript
employee => employee.id === id
```

---

## `forEach()`

Used to display employee cards.

```javascript
employees.forEach(employee => {
    // Create employee card
});
```

---

## `map()`

Used to create an array of employee salaries.

```javascript
const salaries =
    employees.map(employee => employee.salary);
```

---

## `filter()`

Used for searching and filtering employees.

```javascript
employees.filter(employee => {
    return employee.department === "IT";
});
```

---

## `reduce()`

Used to calculate total salary.

```javascript
const totalSalary =
    employees.reduce(
        (total, employee) =>
            total + employee.salary,
        0
    );
```

---

# 🌐 DOM Manipulation

The project demonstrates the following DOM methods:

```javascript
getElementById()
querySelector()
createElement()
appendChild()
textContent
innerHTML
classList
```

Example:

```javascript
const card =
    document.createElement("div");

card.classList.add("employee-card");

card.textContent =
    employee.name;

container.appendChild(card);
```

---

# 🎯 Events Used

The application handles several JavaScript events.

| Event    | Usage                    |
| -------- | ------------------------ |
| `submit` | Employee form submission |
| `click`  | Edit, Delete, Cancel     |
| `input`  | Employee search          |
| `change` | Department filter        |

Example:

```javascript
searchInput.addEventListener(
    "input",
    refreshUI
);
```

---

# 📱 Responsive Design

The application is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

Media queries are used to adjust the layout.

Example:

```css
@media (max-width: 768px) {

    .employee-container {
        grid-template-columns: 1fr;
    }

    .statistics-container {
        grid-template-columns: 1fr;
    }

}
```

---

# 🚀 How to Run the Project

## Step 1: Clone or Open the Project

Open the project in IntelliJ IDEA.

---

## Step 2: Verify the Project Structure

Make sure the following files exist:

```text
index.html
css/style.css
js/employee.js
js/data.js
js/validation.js
js/ui.js
js/app.js
```

---

## Step 3: Open `index.html`

Right-click:

```text
index.html
```

Select:

```text
Open in Browser
```

Choose Google Chrome.

---

## Step 4: Test the Application

The application should initially display sample employees.

You can then test:

```text
Add
Search
Filter
Edit
Update
Delete
Statistics
LocalStorage
```

---

# 🧪 Testing Checklist

## Employee Registration

* [ ] Add employee with valid information
* [ ] Verify employee card is displayed
* [ ] Verify success message

## Validation

* [ ] Test empty fields
* [ ] Test invalid Employee ID
* [ ] Test duplicate Employee ID
* [ ] Test invalid name
* [ ] Test invalid email
* [ ] Test zero salary
* [ ] Test negative salary

## Search

* [ ] Search by Employee ID
* [ ] Search by Name
* [ ] Search by Department
* [ ] Search using partial text

## Filter

* [ ] Filter IT
* [ ] Filter HR
* [ ] Filter Finance
* [ ] Filter Marketing
* [ ] Select All Departments

## CRUD

* [ ] Add employee
* [ ] View employee
* [ ] Edit employee
* [ ] Update employee
* [ ] Delete employee

## Statistics

* [ ] Total employee count
* [ ] Average salary
* [ ] Highest salary
* [ ] Lowest salary

## Persistence

* [ ] Add employee
* [ ] Refresh browser
* [ ] Verify employee still exists

## Responsive Design

* [ ] Test desktop
* [ ] Test tablet
* [ ] Test mobile

---

# 🔧 Browser Developer Tools

For debugging, open Chrome Developer Tools:

```text
F12
```

Useful tabs:

```text
Console
Application
Elements
```

### Console

Used to identify JavaScript errors.

### Application

Used to inspect:

```text
Local Storage
```

### Elements

Used to inspect:

```text
HTML
CSS
DOM
```

---

# 📦 Git Version Control

Initialize Git:

```bash
git init
```

Add files:

```bash
git add .
```

Create the first commit:

```bash
git commit -m "Initial project setup"
```

Recommended commits:

```text
Initial project setup
Add HTML structure
Add CSS styling
Add responsive layout
Add Employee class
Add employee form
Implement employee CRUD
Add employee validation
Add employee search and filtering
Add employee statistics
Add local storage persistence
Update README
```

---

# 🔄 Application Flow

```text
                    User
                      |
                      ↓
                 index.html
                      |
                      ↓
                Employee Form
                      |
                      ↓
                 app.js
                      |
                      ↓
                Validation
                      |
              ┌───────┴───────┐
              ↓               ↓
            Valid           Invalid
              ↓               ↓
         Employee[]       Error Message
              |
              ↓
          localStorage
              |
              ↓
          ui.js
              |
              ↓
        Employee Cards
              |
       ┌──────┼──────┐
       ↓      ↓      ↓
    Search  Filter  CRUD
       |      |      |
       └──────┼──────┘
              ↓
          Statistics
```

---

# 🏗️ CRUD Flow

```text
CREATE
   ↓
Add Employee
   ↓
employees.push()
   ↓
localStorage
   ↓
Display Card


READ
   ↓
Load employees
   ↓
renderEmployees()
   ↓
Display Cards


UPDATE
   ↓
Click Edit
   ↓
Load employee
   ↓
Modify details
   ↓
Update array
   ↓
localStorage
   ↓
Display updated card


DELETE
   ↓
Click Delete
   ↓
Confirmation
   ↓
Remove from array
   ↓
localStorage
   ↓
Refresh UI
```

---

# 🎓 Learning Outcomes

After completing this project, you will have practical experience with:

* HTML5
* CSS3
* Flexbox
* CSS Grid
* Responsive Web Design
* JavaScript ES6+
* JavaScript OOP
* Arrays and Objects
* Array Methods
* DOM Manipulation
* Event Handling
* Form Validation
* Exception Handling
* Browser LocalStorage
* JSON
* Git and GitHub

---

# 🔮 Future Enhancements

Possible improvements for future versions:

* Employee profile images
* Sorting by salary
* Sorting by name
* Pagination
* Dark mode
* Export employees to Excel/CSV
* Import employee data
* Login and authentication
* Backend REST API
* Database integration
* Spring Boot backend
* PostgreSQL database

---

# 👨‍💻 Author

**Employee Management System**

Developed as a frontend JavaScript project to demonstrate practical web development concepts and JavaScript programming skills.

---

## 📄 License

This project is created for educational and learning purposes.
