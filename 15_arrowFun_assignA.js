console.log("========(Step 01 With No args and no return value)========");
let show = () =>{
         console.log("Good Morning, Today is Monday ");
}
show();

console.log("========Step 02 (With 3 args and no return value)========");
let multiply = (num1,num2,num3) => {
         console.log("Multiplication is :",num1 * num2 * num3);
}
multiply(5,5,2);
multiply(10,4,num3=1)

console.log("========Step 03 (With 5 args and return value)========");
let add = (num1,num2,num3,num4,num5) => {
    const result = num1+num2+num3+num4+num5;
    return result;
}
const addResult = add(100,100,200,349,756);
console.log("Addition is : ",addResult);
  const addRes = add(" I am"," learning"," ES6"," features"," in depth");
 console.log("Concatenation of five values :", addRes);