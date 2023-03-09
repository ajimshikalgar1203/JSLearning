console.log("--------1. Total elements available in Array--------");
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log("Total elements aavailable in given array: ",arrayNumbers.length);

console.log("--------2. First Element and Last Element--------");
const valueAtIndex0 = arrayNumbers[0];
console.log(`The First element is: ${valueAtIndex0} `);
const valueAtIndex10 = arrayNumbers[arrayNumbers.length-1];
console.log(`The Last element is: ${valueAtIndex10}`);

console.log("--------3. Log the third last element--------");
const valueAtIndex = arrayNumbers[arrayNumbers.length-3];
console.log(`The third last element is: ${valueAtIndex}`);

console.log("--------4. All Even numbers--------");
var index = 0;
while (index<arrayNumbers.length) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        console.log(element);
    }
     index++;
}

console.log("--------5. All Odd elements--------");
var index = 0;
while (index<arrayNumbers.length) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        console.log(element);
    }
     index++;
}

console.log("--------6. Even positioned elements--------");

for (let index = 1; index < arrayNumbers.length; index+=2) {
    console.log(arrayNumbers[index]);
    
}

console.log("--------7. ODD positioned elements--------");
for (let index = 0; index < arrayNumbers.length; index+=2) {
    console.log(arrayNumbers[index]);
}

console.log("--------8.Sum of all elements --------");
 let sum = 0;
 var index = 0;
 while (index < arrayNumbers.length) {
    sum += arrayNumbers[index];
    index++;
  }
  console.log(`Sum of all elements is: ${sum}`);


 console.log("--------9. Numbers which are Multiple of 5 --------"); 
 const multiplesOf5 = [];
 for (let index = 0; index < arrayNumbers.length; index++) {
   if (arrayNumbers[index] % 5 === 0) {
     multiplesOf5.push(arrayNumbers[index]);
   }
 }
 console.log(multiplesOf5); 

 console.log("--------10. Is number 115 availale--------");
 const is115Available = arrayNumbers.includes(115);
 console.log(`Is number 115 available in given array: ${is115Available}`); 

 console.log("--------11. Is number 23 available--------");
 const is23Available = arrayNumbers.includes(23);
 console.log(`Is number 23 available in given array: ${is23Available}`); 

 console.log("--------12. Insert numbers 55 & 66--------");
 arrayNumbers.splice (3,0,55,66);
 console.log(`After adding numbers 55 & 66 : ${arrayNumbers}`);

 console.log("--------13. Delete 3 elements in array--------");
 var arrayOfNumbers = [20,31,40,25,23,11,29,9,60,2,11];
 console.log(arrayOfNumbers);
 arrayOfNumbers.splice(4,3);
 console.log(`After removing 3 elements: ${arrayOfNumbers}`);

