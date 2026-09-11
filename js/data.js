import { Employee } from "./employee.js";


const STORAGE_KEY = "employees";


const defaultEmployees = [

    new Employee(
        "EMP101",
        "Rahul Kumar",
        "rahul@gmail.com",
        "IT",
        50000,
        "Male",
        "2025-01-10"
    ),

    new Employee(
        "EMP102",
        "Priya Sharma",
        "priya@gmail.com",
        "HR",
        45000,
        "Female",
        "2025-02-15"
    ),

    new Employee(
        "EMP103",
        "Arun Kumar",
        "arun@gmail.com",
        "Finance",
        60000,
        "Male",
        "2025-03-20"
    ),

    new Employee(
        "EMP104",
        "Sneha Patel",
        "sneha@gmail.com",
        "Marketing",
        55000,
        "Female",
        "2025-04-05"
    )

];


function loadEmployees() {

    try {

        const storedEmployees =
            localStorage.getItem(STORAGE_KEY);


        if (!storedEmployees) {

            return [...defaultEmployees];

        }


        const parsedEmployees =
            JSON.parse(storedEmployees);


        return parsedEmployees.map(
            employee =>
                new Employee(
                    employee.id,
                    employee.name,
                    employee.email,
                    employee.department,
                    employee.salary,
                    employee.gender,
                    employee.joiningDate
                )
        );

    } catch (error) {

        console.error(
            "Error loading employees:",
            error
        );

        return [...defaultEmployees];
    }

}


export const employees = loadEmployees();


export function saveEmployees() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(employees)
        );

    } catch (error) {

        console.error(
            "Error saving employees:",
            error
        );

        throw new Error(
            "Unable to save employee data."
        );
    }

}


export function resetEmployees() {

    try {

        employees.length = 0;

        employees.push(
            ...defaultEmployees.map(
                employee =>
                    new Employee(
                        employee.id,
                        employee.name,
                        employee.email,
                        employee.department,
                        employee.salary,
                        employee.gender,
                        employee.joiningDate
                    )
            )
        );


        saveEmployees();

    } catch (error) {

        console.error(error);

        throw new Error(
            "Unable to reset employee data."
        );
    }

}