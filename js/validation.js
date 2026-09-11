export function validateEmployee(
    employee,
    employees,
    isEditing = false,
    originalId = null
) {


    // Required field validation

    if (
        !employee.id ||
        !employee.name ||
        !employee.email ||
        !employee.department ||
        !employee.salary ||
        !employee.gender ||
        !employee.joiningDate
    ) {

        throw new Error(
            "All fields are required."
        );
    }



    // Employee ID validation

    const idPattern =
        /^EMP[0-9]+$/i;


    if (!idPattern.test(employee.id)) {

        throw new Error(
            "Employee ID must be like EMP101."
        );
    }



    // Unique Employee ID

    const duplicate =
        employees.some(
            existingEmployee => {

                if (
                    isEditing &&
                    existingEmployee.id === originalId
                ) {
                    return false;
                }

                return (
                    existingEmployee.id.toLowerCase() ===
                    employee.id.toLowerCase()
                );

            }
        );


    if (duplicate) {

        throw new Error(
            "Employee ID already exists."
        );
    }



    // Name validation

    const namePattern =
        /^[A-Za-z ]+$/;


    if (!namePattern.test(employee.name)) {

        throw new Error(
            "Name should contain only letters and spaces."
        );
    }



    // Name length

    if (
        employee.name.length < 2 ||
        employee.name.length > 100
    ) {

        throw new Error(
            "Name must contain 2 to 100 characters."
        );
    }



    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(employee.email)) {

        throw new Error(
            "Enter a valid email address."
        );
    }



    // Salary validation

    if (
        !Number.isFinite(employee.salary) ||
        employee.salary <= 0
    ) {

        throw new Error(
            "Salary must be greater than zero."
        );
    }



    return true;
}