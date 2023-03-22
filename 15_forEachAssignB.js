class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const empAnil = new Employee(22,"Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33,"Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77,"Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88,"vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99,"Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log("~~~~~~~~~~~~~~~~~~~~~~~~TCS Employee Details~~~~~~~~~~~~~~~~~~~~~~~~~");
arrayEmployee.forEach(element => {
    if (element.emp_company == "TCS") {
        console.log(`Name: ${element.emp_name}    Company Name: ${element.emp_company}`);
    }
});

console.log("~~~~~~~~~~~~~~~~~~~~~~~~Employees with salary greater than 50000~~~~~~~~~~~~~~~~~~~~~~~~~");
arrayEmployee.forEach(element => {
    if (element.emp_salary >= 50000) {
        console.log(`Employee Details = ID: ${element.emp_id}, Employee Name: ${element.emp_name}, Department Name: ${element.emp_dept}, Salary: ${element.emp_salary}, Company Name: ${element.emp_company} `);
    }
});

console.log("~~~~~~~~~~~~~~~~~~~~~~~~Sum of all employees salary ~~~~~~~~~~~~~~~~~~~~~~~~~");
let totalSalary = 0;
arrayEmployee.forEach(element => {
    const salary = element.emp_salary;
    totalSalary = totalSalary + element.emp_salary;
});
console.log(`sum of all employees salary is: ${totalSalary}`);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~Average salary ~~~~~~~~~~~~~~~~~~~~~~~~~");
let numberOfEmp = arrayEmployee.length;
arrayEmployee.forEach(element => {
    avgSalary = totalSalary/numberOfEmp;
    console.log(`Average salary is: ${avgSalary}`);
});
 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~IT or HR dept. employees ~~~~~~~~~~~~~~~~~~~~~~~~~");
arrayEmployee.forEach(element => {
    if (element.emp_salary >= 75000 ) {
        if (element.emp_dept == "IT" || element.emp_dept== "HR") {
            
        }
        console.log(`Employee Details = ID: ${element.emp_id}, Employee Name: ${element.emp_name}, Department Name: ${element.emp_dept}, Salary: ${element.emp_salary}, Company Name: ${element.emp_company} `);
 }
});