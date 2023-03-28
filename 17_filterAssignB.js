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
const emp_company = arrayEmployees.filter((Employee)=> {
    return Employee.emp_company=="TCS";
});
emp_company.forEach((Employee)=> {
    console.log(`Company Name:${Employee.emp_company}, Employee Name:${Employee.emp_name}`);
});

console.log("~~~~~~~~~~~~~~~~ Step 02 ~~~~~~~~~~~~~~~~~~~");
const salaryarray = arrayEmployees.filter((element)=> {
    element.emp_company=="Wipro"
});
let sum = 0;
salaryarray.forEach((element) =>sum=sum+element.emp_salary)
let average1 = sum/salaryarray.length;
console.log(average1);

console.log("~~~~~~~~~~~~~~~~ Step 03 ~~~~~~~~~~~~~~~~~~~");
const salaryAvgArray = arrayEmployees.filter((element) => 
element.emp_company=="wipro" || element.emp_company=="Infy");
let totalSalary = 0;
salaryAvgArray.forEach((element) => 
totalSalary=totalSalary + element.emp_salary);

let average = totalSalary/salaryAvgArray.length;
console.log(average);