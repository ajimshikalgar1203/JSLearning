  function maleMarriageEligibility(gender, age, boyName){
     var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` :  `Hey ${boyName}  you are Not eligible for marriage`;
     return result;
     }
      var result = maleMarriageEligibility("Male", 25, "Billgates");
      console.log(result);
      var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
      console.log(result);
     console.log("====================================================");

     function femaleMarriageEligibility( Gender, age, girlName){
        var result = (Gender=="Female" && age>=18) ? `hey ${girlName} you are  eligible for marriage` : `hey ${girlName} you are Not eligible for marriage`;
        return result;
     }
       var result = femaleMarriageEligibility("Female", 16, "Jenifer");
       console.log(result);
       var result = femaleMarriageEligibility("Female", 27, "Malinda Gates");
       console.log(result);
