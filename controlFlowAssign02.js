console.log("*********Step 01*********");
function maleMarriageEligibility(gender, age,boyName){
    if (gender=="Male" && age>=21) {
        console.log(`Hey ${boyName} You are eligible for marriege`);
    } else {
        console.log(`Hey ${boyName} You are not eligible for marriege`);
    }
}
    maleMarriageEligibility("Male", 25, "Billgates");
    maleMarriageEligibility("Male", 17, "Stew Jobs");

    console.log("*********Step 02*********");
    function feMaleMarriageEligibility(gender, age,girlName){
        if (gender=="Female" && age>=18) {
            console.log(`Hey ${girlName} You are eligible for marriege`);
        } else {
            console.log(`Hey ${girlName} You are not eligible for marriege`);
        }
    }
        feMaleMarriageEligibility("Female", 16, "Jenifer");
        feMaleMarriageEligibility("Female", 27, "Malinda Gates");