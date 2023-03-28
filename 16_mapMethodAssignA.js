console.log("~~~~~~~~~Add 10 into each element~~~~~~~~~~~");
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

const arrayTransformed = [];
 arrayNumbers.forEach ( (currentValue) => {
         arrayTransformed.push(currentValue+10)
 });
 console.log(arrayTransformed);

 console.log("~~~~~~~~~Square the each array element~~~~~~~~~~~");
 arraySquare = [];
 arrayNumbers.forEach((currentValue) => {
        arraySquare.push(currentValue * currentValue);
 });
 console.log(arraySquare);

 console.log("~~~~~~~~~Add index value into each element~~~~~~~~~~~");
 arrayIndex =[];
 arrayNumbers.forEach((currentValue , index) => {
    arrayIndex.push(currentValue + index);
 });
 console.log(arrayIndex);