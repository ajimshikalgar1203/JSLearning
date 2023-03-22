console.log("~~~~~~~~~~~~Array elements with its index no ~~~~~~~~~~~~~");
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
 arrayNumbers.forEach(function (currentValue, index) {
    console.log("index :", index , "  Element: ",currentValue);
 } 
 );

 console.log("~~~~~~~~~~~~~~Positive elements of given array~~~~~~~~~~~~");
 arrayNumbers.forEach(element => {
    if (element>= 0) {
        console.log(element);
    }
 });

 console.log("~~~~~~~~~~~~~Negative elements of array~~~~~~~~~~~~~");
arrayNumbers.forEach(element => {
     const array = [element];
     if (element < 0) {
      console.log(array);
     }
});

   console.log("~~~~~~~~~~~~~~~~Even numbers ~~~~~~~~~~~~~~~~");
   arrayNumbers.forEach(element => {
      if (element%2==0) {
          console.log(element);
      }
  });

  console.log("~~~~~~~~~~~~Sum of all elements of array ~~~~~~~~~~~~~~");
  let sum = 0;
arrayNumbers.forEach( (element) => {
    sum = sum + element;
});
console.log(sum);

console.log("~~~~~~~~~Even indexed elements ~~~~~~~~~~~~~~");
arrayNumbers.forEach((element, index) => {
   if (index%2==0) {
       console.log(element);
   }
});