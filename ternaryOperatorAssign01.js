console.log("*********Step 01********");

function greaterNumber(num1, num2){
    var result = num1>num2 ?num1 : num2;
    console.log( "Greatest Number is: ",result);
  return result
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("*********Step 02********");
function isEvenOrOddNum(Number){
   var result = Number%2==0 ? "Even" : "Odd";
   console.log( "Given no. is: ",result);
   return result; 
 }
  isEvenOrOddNum(29);
  isEvenOrOddNum(44);
  isEvenOrOddNum(101);
  isEvenOrOddNum(0);

  console.log("*********Step 03********");
  function wordLength(word){
   var wordLength = word.length;
   var result = wordLength%2==0 ? "Even" : "Odd";
    return result;
   }
     var result = wordLength("JavaScript");
      console.log(`Word "JavaScript" has ${result} length` );
     // var result = wordLength("Google");
     console.log(`Word "Google" has ${result} length` );
     console.log(`Word "Developer" has ${result} length` );
     