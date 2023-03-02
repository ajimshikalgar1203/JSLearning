function tcsInterviewEligibility(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congratulation ${candidateName} you are eligible for Interview.`); 
    } else {
        console.log(`Unfortunately ${candidateName} you are not eligible for Interview.`);
    }
}
tcsInterviewEligibility(80,86,90,"Ajim");
tcsInterviewEligibility(70,65,55,"Sujit");
tcsInterviewEligibility(60,79,88,"Shubham");
tcsInterviewEligibility(72,58,95,"Vikrant");