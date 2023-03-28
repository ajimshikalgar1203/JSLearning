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

const arrayEmployees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log("~~~~~~~~~~~~~~~~~~~~~~~Ascending Order~~~~~~~~~~~~~~~~~~~~~~");
const id = arrayEmployees.sort((a,b)=>{
    return a.emp_id > b.emp_id;
})
id.forEach(element => {
    console.log(`Employee id:${element.emp_id} Name:${element.emp_name} Department:${element.emp_dept}`);
});

console.log("~~~~~~~~~~~~~~~~~~~~~~~Descending Order~~~~~~~~~~~~~~~~~~~~~~");
let salary = arrayEmployees.sort((a,b) => {
    return a.emp_salary < b.emp_salary ? 1 : -1;
});
salary.forEach((element) => {
    console.log(` Name:${element.emp_name} Salary: ${element.emp_salary} Company:${element.emp_company}`);
});
