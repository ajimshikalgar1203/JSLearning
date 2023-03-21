console.log("================== Created all employee objects ==================");
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
console.log(empAnil);
const empRadha = new Employee(33,"Radha", "HR", 74000, "Wipro");
console.log(empRadha);
const empRishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");
console.log(empRishi);
const empSonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
console.log(empSonali);
const empMonika = new Employee(77,"Monika", "IT", 40000, "Wipro");
console.log(empMonika);
const empViny = new Employee(88,"vinayak", "IT", 75000, "TCS");
console.log(empViny);
const empMahi = new Employee(99,"Mahesh", "HR", 85000, "Infy");
console.log(empMahi);

console.log("================== Add all objects in an Array ==================");
arrayEmployees = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
console.log(arrayEmployees);

console.log("================== Step 01 ==================");
for (const element of arrayEmployees) {
    if (element.emp_company == "TCS") {
         console.log(`Employee Name : ${element.emp_name} Company Name : ${element.emp_company} `);
    }
}

console.log("================== Step 02 ==================");
for (const element of arrayEmployees) {
    if (element.emp_dept == "Finance") {
         console.log(`Department Name : ${element.emp_dept} Employee Name : ${element.emp_name} `);
    }
}

console.log("================== Step 03 ==================");
for (const element of arrayEmployees) {
    if (element.emp_name.startsWith("R")) {
        console.log(`Employee Details = ID: ${element.emp_id}, Employee Name: ${element.emp_name}, Department Name: ${element.emp_dept}, Salary: ${element.emp_salary}, Company Name: ${element.emp_company} `); 
    }
}

console.log("================== Step 04 ==================");
for (const element of arrayEmployees) {
    if (element.emp_salary > 75000) {
        console.log(`Employee Name: ${element.emp_name}, Company Name : ${element.emp_company},  Salary: ${element.emp_salary}`);
    }
}

console.log("================== Step 05 ==================");
for (const element of arrayEmployees) {
    if (element.emp_salary >=50000 && element.emp_dept == "IT") {
        console.log(`Employee Details = ID: ${element.emp_id}, Employee Name: ${element.emp_name}, Department Name: ${element.emp_dept}, Salary: ${element.emp_salary}, Company Name: ${element.emp_company} `);
    }
}

console.log("================== Step 06 ==================");
for (const element of arrayEmployees) {
    if (element.emp_company == "Infy") {
        console.log(`Employee Details = ID: ${element.emp_id}, Employee Name: ${element.emp_name}, Department Name: ${element.emp_dept}, Salary: ${element.emp_salary}, Company Name: ${element.emp_company}`);
    }
}