console.log("************Step 01************");
function voteEligibility(age) {
    if(age<=0 || age>=100) {
        return `Invalid Data or age ${age}`
        // console.log(`Invalid Data or age`);
    }
    else if (age>=18) {
        return `Your age is ${age} you are eligible to vote`
        // console.log(`Your age is ${age} you are eligible to vote`);
    }
    else {
        return `Your age is ${age}  & you are not elligible to vote`
        // console.log(`Your age is ${age} You are not eligible to vote`);
    }
   
}
console.log(voteEligibility(45)); 
console.log(voteEligibility(17));
console.log(voteEligibility(8));
console.log(voteEligibility(20));
console.log(voteEligibility(-10));
console.log(voteEligibility("undefined"));
console.log(voteEligibility(200));
console.log(voteEligibility("null"));
console.log(voteEligibility(0));


console.log("************Step 02************");

function gradeCalculation(marks){
    // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
    // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
    if (marks>=90 && marks<=100) {
        console.log(`Fantastic Marks ${marks}.Your grade is A+.`);
    }
    if (marks>=75 && marks<90) {
        console.log(`Excellent Marks${marks}.Your grade is A.`);
    }
    if (marks>=50 && marks<75) {
        console.log(`Good Marks ${marks}. Your grade is B.`);
    }
    if (marks>=35 && marks<50) {
        console.log(`Marks is ${marks}. Your grade is C, Need Improvement`);
    }
    if(marks<=0 || marks > 100 || (typeof marks!= "number") || marks==NaN){
        console.log(`Please provide the valid marks - ${marks}`);
    }
    
    }
    gradeCalculation(98);
    gradeCalculation(80);
    gradeCalculation(90);
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation(35);
    gradeCalculation(29);
    gradeCalculation(64);
    gradeCalculation(49);
    gradeCalculation("91");
    gradeCalculation("Eighty");
    gradeCalculation(NaN);// 
    gradeCalculation(undefined);//
    gradeCalculation(null);