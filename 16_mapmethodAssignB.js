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

console.log("~~~~~~~~~~~Name of all Employees~~~~~~~~~~");
const arrayName = [];
 arrayEmployee.forEach ( (currentValue) => {
         arrayName.push(currentValue.emp_name)
 });
 console.log(arrayName);

 console.log("~~~~~~~~~~~List of Departments~~~~~~~~~~");
 const arrayDept = [];
 arrayEmployee.forEach((currentValue) => {
       arrayDept.push(currentValue.emp_dept);
 });
 console.log(arrayDept);

 console.log("~~~~~~~~~~~Employee Id's~~~~~~~~~~");
 const arrayId = [];
 arrayEmployee.forEach((currentValue) => {
      arrayId.push(currentValue.emp_id);
 });
 console.log(arrayId);

 console.log("~~~~~~~~~~~Employees working in TCS~~~~~~~~~~");
arrayEmployee.forEach(element => {
    if (element.emp_company == "TCS") {
        console.log(`Name: ${element.emp_name}`);
    }
});
 