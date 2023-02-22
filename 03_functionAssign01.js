console.log("---------No. 1 ---------");
function myName(){
    console.log("My Name is: Ajim Shikalgar");
}
myName(); 

function hobbies(){
    console.log("My Hobbies are: trekking, Driving, cooking");
}
hobbies();
console.log("---------No. 2 ---------");

var str1 = "Ajim";
var str2 = "Shikalgar";
var str3 = "Dr.Daulatrao Aher College of Engg.";

function personalDetails(firstName, lastName, collegeName ){
 console.log( "First Name:",str1,   "Last Name:",str2, "College Name:", str3);
}
personalDetails(str1, str2, str3);
console.log("---------No. 3 ---------");

var name1 = "Virat";
var name2 = "Anushka";

var num1 = 1000;
var num2 = 2000;

function swapValuesDude(value1, value2){
   console.log("Before swap: ", value1, value2);
   var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After swap: ", value1, value2);
}
swapValuesDude(name1, name2);
swapValuesDude(num1, num2 );

console.log("---------No. 4 ---------");

function addThreeValues(num1,num2,num3){
 var sum = num1 + num2 + num3;
 return sum;
}
var sumResult = addThreeValues(10.23,600,40);
console.log(sumResult);
var sumResult1 = addThreeValues("Hello", "Good", "Morning");
console.log(sumResult1);