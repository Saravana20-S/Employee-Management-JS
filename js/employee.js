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