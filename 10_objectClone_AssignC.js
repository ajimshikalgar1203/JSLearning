console.log("================Step 01===============");
const arrayNums = [ 20, 3, 4, 56, 90, 400, 49 ];
const newArray = arrayNums; // Shallow Clone
newArray.push(55,66);
console.log(`Original array: `,arrayNums);
console.log(`cloned array: `,newArray); 

console.log("================Step 02===============");
console.log(`Original array : `,arrayNums);
arrayNums.push(10,25);
const resultArray = [...arrayNums, ...newArray];
console.log(`Cloned array :`,resultArray);

console.log("================Step 03===============");
const arrayEven = [ 2, 30, 14, 8];
const resultarray = [...arrayNums, ...arrayEven];
console.log(`After merging both arrays: `,resultarray);

console.log("================Step 05===============");
const employee_info = {
    emp_id : "John Doe",
    salary: {
        july_month: "40000INR",
        aug_month: "50000INR",
        jun_month: "65000INR"
    },
    address:{
        locality:{
            colony:"Om Vrindavan Society",
            street: "Kanch Pokali",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800-4567 32","+91 9096 5678 77"]
}

console.log(`Address: `,employee_info.address);
console.log(`Mobile Numbers: `,employee_info.mobiles);

console.log("================Step 06===============");
const newSalary = JSON.parse(JSON.stringify(employee_info));
newSalary.salary.july_month = "80K";
console.log(`Old Salary: ${employee_info.salary.july_month}`);
console.log(`newSalary: ${newSalary.salary.july_month}`);

const newCountry = JSON.parse(JSON.stringify(employee_info));
newCountry.country = "United Kingdom";
console.log(`Old country: ${employee_info.address.country}`);
console.log(`newCountry: ${newCountry.country}`);