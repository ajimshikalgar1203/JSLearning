const arrayNumbers = [20,11,40,25,49,9,90,60,2,19];
console.log("~~~~~~~~~~~Greater than 50 Numbers~~~~~~~~~~~~~~~~~~~~~~~");
const arrayFilter = arrayNumbers.filter(currentValue=>currentValue>50);
console.log (arrayFilter)
console.log("~~~~~~~~~~~Even Numbers~~~~~~~~~~~~~~~~~~~~~~~");
const arrayFilt = arrayNumbers.filter(currentValue=>currentValue%2==0);
console.log(arrayFilt);
console.log("~~~~~~~~~~~Odd Numbers~~~~~~~~~~~~~~~~~~~~~~~");
const arrayOdd = arrayNumbers.filter(currentValue=>currentValue%2==1);
console.log(arrayOdd);
console.log("~~~~~~~~~~~ Numbers which are multiple of 5 ~~~~~~~~~~~~~~~~~~~~~~~");
const arrayMul = arrayNumbers.filter(currentValue=>currentValue%5==0);
console.log(arrayMul);
console.log("~~~~~~~~~~~Numbers which are between 20 to 50  ~~~~~~~~~~~~~~~~~~~~~~~");
const arrayBwt = arrayNumbers.filter(currentValue=>currentValue>20 && currentValue<50);
console.log(arrayBwt);
