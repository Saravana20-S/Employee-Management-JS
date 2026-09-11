import { Employee } from "./employee.js";

import {
    employees,
    saveEmployees,
    resetEmployees
} from "./data.js";

import {
    validateEmployee
} from "./validation.js";

import {
    renderEmployees,
    updateStatistics
} from "./ui.js";



/* =========================
   DOM ELEMENTS
========================= */

const employeeForm =
    document.getElementById(
        "employeeForm"
    );


const employeeIdInput =
    document.getElementById(
        "employeeId"
    );


const employeeNameInput =
    document.getElementById(
        "employeeName"
    );


const emailInput =
    document.getElementById(
        "email"
    );


const departmentInput =
    document.getElementById(
        "department"
    );


const salaryInput =
    document.getElementById(
        "salary"
    );


const joiningDateInput =
    document.getElementById(
        "joiningDate"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const departmentFilter =
    document.getElementById(
        "departmentFilter"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


const submitBtn =
    document.getElementById(
        "submitBtn"
    );


const cancelBtn =
    document.getElementById(
        "cancelBtn"
    );


const formTitle =
    document.getElementById(
        "formTitle"
    );



/* =========================
   EDITING STATE
========================= */

let editingEmployeeId = null;



/* =========================
   GET FORM DATA
========================= */

function getFormData() {

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    return new Employee(

        employeeIdInput.value
            .trim(),

        employeeNameInput.value
            .trim(),

        emailInput.value
            .trim(),

        departmentInput.value,

        salaryInput.value,

        gender
            ? gender.value
            : "",

        joiningDateInput.value
    );
}



/* =========================
   FORM SUBMIT
========================= */

employeeForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        try {

            const employee =
                getFormData();


            if (editingEmployeeId) {

                updateEmployee(
                    employee
                );

            } else {

                validateEmployee(
                    employee,
                    employees
                );


                employees.push(
                    employee
                );


                saveEmployees();


                showMessage(
                    "Employee added successfully.",
                    "success"
                );

            }


            resetForm();

            refreshUI();

        } catch (error) {

            showMessage(
                error.message,
                "error"
            );

        }

    }
);



/* =========================
   UPDATE EMPLOYEE
========================= */

function updateEmployee(
    updatedEmployee
) {

    validateEmployee(
        updatedEmployee,
        employees,
        true,
        editingEmployeeId
    );


    const index =
        employees.findIndex(
            employee =>
                employee.id ===
                editingEmployeeId
        );


    if (index === -1) {

        throw new Error(
            "Employee not found."
        );
    }


    employees[index] =
        updatedEmployee;


    saveEmployees();


    showMessage(
        "Employee updated successfully.",
        "success"
    );
}



/* =========================
   EDIT EMPLOYEE
========================= */

function editEmployee(id) {

    try {

        const employee =
            employees.find(
                employee =>
                    employee.id === id
            );


        if (!employee) {

            throw new Error(
                "Employee not found."
            );
        }


        employeeIdInput.value =
            employee.id;

        employeeNameInput.value =
            employee.name;

        emailInput.value =
            employee.email;

        departmentInput.value =
            employee.department;

        salaryInput.value =
            employee.salary;

        joiningDateInput.value =
            employee.joiningDate;


        const gender =
            document.querySelector(
                `input[name="gender"][value="${employee.gender}"]`
            );


        if (gender) {

            gender.checked = true;

        }


        editingEmployeeId = id;


        submitBtn.textContent =
            "Update Employee";


        cancelBtn.classList.remove(
            "hidden"
        );


        formTitle.textContent =
            "Update Employee";


        document
            .getElementById(
                "employee-form"
            )
            .scrollIntoView({
                behavior: "smooth"
            });


        clearMessage();

    } catch (error) {

        showMessage(
            error.message,
            "error"
        );

    }

}



/* =========================
   DELETE EMPLOYEE
========================= */

function handleDelete(id) {

    try {

        const employee =
            employees.find(
                employee =>
                    employee.id === id
            );


        if (!employee) {

            throw new Error(
                "Employee not found."
            );
        }


        const confirmed =
            confirm(
                `Are you sure you want to delete ${employee.name}?`
            );


        if (!confirmed) {

            return;

        }


        const index =
            employees.findIndex(
                employee =>
                    employee.id === id
            );


        employees.splice(
            index,
            1
        );


        saveEmployees();


        showMessage(
            "Employee deleted successfully.",
            "success"
        );


        refreshUI();

    } catch (error) {

        showMessage(
            error.message,
            "error"
        );

    }

}



/* =========================
   SEARCH + FILTER
========================= */

function getFilteredEmployees() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const department =
        departmentFilter.value;


    return employees.filter(
        employee => {


            const matchesSearch =

                employee.id
                    .toLowerCase()
                    .includes(searchText)

                ||

                employee.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                employee.department
                    .toLowerCase()
                    .includes(searchText);


            const matchesDepartment =

                department === "All"

                ||

                employee.department ===
                department;


            return (
                matchesSearch &&
                matchesDepartment
            );

        }
    );

}



/* =========================
   SEARCH EVENT
========================= */

searchInput.addEventListener(
    "input",
    refreshUI
);



/* =========================
   FILTER EVENT
========================= */

departmentFilter.addEventListener(
    "change",
    refreshUI
);



/* =========================
   CANCEL EDIT
========================= */

cancelBtn.addEventListener(
    "click",
    function() {

        resetForm();

        clearMessage();

    }
);



/* =========================
   RESET FORM
========================= */

function resetForm() {

    employeeForm.reset();


    editingEmployeeId = null;


    submitBtn.textContent =
        "Add Employee";


    cancelBtn.classList.add(
        "hidden"
    );


    formTitle.textContent =
        "Add Employee";

}



/* =========================
   MESSAGE
========================= */

function showMessage(
    message,
    type
) {

    formMessage.textContent =
        message;


    formMessage.className =
        `message ${type}`;


    setTimeout(
        () => {

            formMessage.textContent =
                "";

            formMessage.className =
                "message";

        },
        3000
    );

}


function clearMessage() {

    formMessage.textContent =
        "";

    formMessage.className =
        "message";

}



/* =========================
   REFRESH UI
========================= */

function refreshUI() {

    const filteredEmployees =
        getFilteredEmployees();


    renderEmployees(
        filteredEmployees,
        editEmployee,
        handleDelete
    );


    updateStatistics(
        employees
    );

}



/* =========================
   START APPLICATION
========================= */

refreshUI();