export function renderEmployees(
    employees,
    onEdit,
    onDelete
) {

    const container =
        document.getElementById(
            "employeeContainer"
        );


    const employeeCount =
        document.getElementById(
            "employeeCount"
        );


    container.innerHTML = "";


    employeeCount.textContent =
        `${employees.length} Employee${employees.length !== 1 ? "s" : ""}`;


    if (employees.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <h3>No Employees Found</h3>

                <p>
                    Try changing your search or filter.
                </p>

            </div>
        `;

        return;
    }


    employees.forEach(employee => {

        const card =
            document.createElement("div");


        card.classList.add(
            "employee-card"
        );


        const heading =
            document.createElement("h3");

        heading.textContent =
            employee.name;


        const id =
            document.createElement("p");

        id.innerHTML =
            `<strong>Employee ID:</strong> `;

        const idValue =
            document.createElement("span");

        idValue.textContent =
            employee.id;

        id.appendChild(idValue);


        const email =
            document.createElement("p");

        email.innerHTML =
            `<strong>Email:</strong> `;

        const emailValue =
            document.createElement("span");

        emailValue.textContent =
            employee.email;

        email.appendChild(emailValue);


        const department =
            document.createElement("p");

        department.innerHTML =
            `<strong>Department:</strong> `;

        const departmentValue =
            document.createElement("span");

        departmentValue.textContent =
            employee.department;

        department.appendChild(
            departmentValue
        );


        const salary =
            document.createElement("p");

        salary.innerHTML =
            `<strong>Salary:</strong> `;

        const salaryValue =
            document.createElement("span");

        salaryValue.textContent =
            formatCurrency(employee.salary);

        salary.appendChild(
            salaryValue
        );


        const gender =
            document.createElement("p");

        gender.innerHTML =
            `<strong>Gender:</strong> `;

        const genderValue =
            document.createElement("span");

        genderValue.textContent =
            employee.gender;

        gender.appendChild(
            genderValue
        );


        const joiningDate =
            document.createElement("p");

        joiningDate.innerHTML =
            `<strong>Joining Date:</strong> `;

        const dateValue =
            document.createElement("span");

        dateValue.textContent =
            employee.joiningDate;

        joiningDate.appendChild(
            dateValue
        );


        const buttons =
            document.createElement("div");

        buttons.classList.add(
            "card-buttons"
        );


        const editButton =
            document.createElement("button");

        editButton.textContent =
            "Edit";

        editButton.classList.add(
            "btn",
            "edit-btn"
        );


        editButton.addEventListener(
            "click",
            () => onEdit(employee.id)
        );


        const deleteButton =
            document.createElement("button");

        deleteButton.textContent =
            "Delete";

        deleteButton.classList.add(
            "btn",
            "delete-btn"
        );


        deleteButton.addEventListener(
            "click",
            () => onDelete(employee.id)
        );


        buttons.appendChild(
            editButton
        );

        buttons.appendChild(
            deleteButton
        );


        card.appendChild(heading);

        card.appendChild(id);

        card.appendChild(email);

        card.appendChild(department);

        card.appendChild(salary);

        card.appendChild(gender);

        card.appendChild(joiningDate);

        card.appendChild(buttons);


        container.appendChild(card);

    });

}



export function updateStatistics(
    employees
) {

    const totalEmployees =
        document.getElementById(
            "totalEmployees"
        );

    const averageSalary =
        document.getElementById(
            "averageSalary"
        );

    const highestSalary =
        document.getElementById(
            "highestSalary"
        );

    const lowestSalary =
        document.getElementById(
            "lowestSalary"
        );


    totalEmployees.textContent =
        employees.length;


    if (employees.length === 0) {

        averageSalary.textContent =
            "₹0";

        highestSalary.textContent =
            "₹0";

        lowestSalary.textContent =
            "₹0";

        return;
    }



    // reduce()

    const totalSalary =
        employees.reduce(
            (total, employee) =>
                total + employee.salary,
            0
        );


    const average =
        totalSalary / employees.length;



    // map()

    const salaries =
        employees.map(
            employee => employee.salary
        );


    const highest =
        Math.max(...salaries);


    const lowest =
        Math.min(...salaries);


    averageSalary.textContent =
        formatCurrency(
            Math.round(average)
        );

    highestSalary.textContent =
        formatCurrency(highest);

    lowestSalary.textContent =
        formatCurrency(lowest);

}



function formatCurrency(amount) {

    return `₹${Number(amount).toLocaleString("en-IN")}`;

}