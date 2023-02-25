console.log("*********Step 01*********");
function checkEvenOdd(num){
    if (num%2==0) {
       return "EVEN";
    }
       if (num%2!=0) {
           return "ODD";
       }
    }
        var result = checkEvenOdd(45);
        console.log(`Given number 45 is ${result}`);
        var result = checkEvenOdd(70);
        console.log(`Given number 70 is ${result}`);
        var result = checkEvenOdd(67);
        console.log(`Given number 67 is ${result}`);
        var result = checkEvenOdd(98);
        console.log(`Given number 98 is ${result}`);

        console.log("*********Step 02*********");
        function voteEligibility(age) {
            if (age >= 18) {
              return "eligible to vote!";
            } else {
              return "not eligible to vote.";
            }
          }
          var result = voteEligibility(18);
          console.log(`Age of 18 is ${result}`); 
          var result = voteEligibility(20);
          console.log(`Age of 20 is ${result}`);
          var result = voteEligibility(17);
          console.log(`Age of 17 is ${result}`);
          var result = voteEligibility(40);
          console.log(`Age of 40 is ${result}`);

          console.log("*********Step 03*********");
          function stringCharacter(character){
            if (character.length>10) {
                return "String JavaScript-ES6 contains more than 10 characters";
            }else{
                return "Characters are less than 10";
            }
          }
         var result =stringCharacter("Javascript-ES6");
        console.log(result);

        console.log("*********Step 04*********");
          function startwithjava(word){
            if (word.startsWith("Java")) {
                return `The given word "${word}" starts with Java`;
            }else{
                return `The given word "${word}" does not starts with Java`;
            }
          }
         var result =startwithjava("Javascript Language");
        console.log(result);
       