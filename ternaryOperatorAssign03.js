function tcsInterviewCriteria(gradScore, hscScore, sscScore, candidateName){
    var result = (gradScore>=70 && hscScore>=80 && sscScore>=90) ? `Congratulation ${candidateName} you are eligible for TCS Interview` : `Unfortunately You are not eligible for TCS Interview`;
    return result;
}
var result = tcsInterviewCriteria(70,65,55,"Vikrant");
console.log(result);
var result = tcsInterviewCriteria(80,86,90,"Ajim");
console.log(result);
var result = tcsInterviewCriteria(60,79,88,"Vaishnavi");
console.log(result);