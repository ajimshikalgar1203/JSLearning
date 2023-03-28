const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(arrayRollNumbers);
console.log("~~~~~~~~~~~~~~~~~~~~~~~reverse array~~~~~~~~~~~~~~~~~~~");
const arrayReverse = arrayRollNumbers.reverse();
console.log(arrayReverse);
console.log("~~~~~~~~~~~~~~~~~~~~using sort method & without anu custom logic~~~~~~~~~~~~~~~~");
const arraysort = arrayRollNumbers.sort();
console.log(arraysort);
console.log("~~~~~~~~~~~~~~~~~~~~~~~Array in Ascending order~~~~~~~~~~~~~~~~~~~");
arrayRollNumbers.sort((a,b) => {
      return a>b ? 1: -1;
});
console.log(arrayRollNumbers);
console.log("~~~~~~~~~~~~~~~~~~~~~~~Greatest number of array ~~~~~~~~~~~~~~~~~~~");
const sub = arrayRollNumbers.reduce((currentValue,previous)=> {
    return currentValue>previous ? currentValue : previous;
});
console.log(sub);
console.log("~~~~~~~~~~~~~~~~~~~~~~~smallest number of array ~~~~~~~~~~~~~~~~~~~");
const subArray = arrayRollNumbers.reduce((currentValue,previous) =>{
     return currentValue<previous ? currentValue : previous;
});
console.log(subArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~Remove Duplicate elements ~~~~~~~~~~~~~~~~~~~");
const uniquechars = [...new Set (arrayRollNumbers)];
console.log(uniquechars);