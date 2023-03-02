console.log("----------Total no. of vowels in given string----------");
            var totalNumVowels = function (str) {
                var vowelsCount = 0;
            
            for (let index = 0; index<= str.length; index++) {
                var char = str.charAt(index);
            if (char == "a" ||char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" ||char == "I" || char == "O" || char == "U") {
                 vowelsCount += 1;
                }
            }
            return vowelsCount;
        }
            var result = totalNumVowels("JavaScript is the language of internet");
            console.log(`Total no. of vowels in "JavaScript is the language of internet" are:`,result);
            var result = totalNumVowels("I am Agular Developer");
            console.log(`Total no. of vowels in"I am Agular Developer" are:`,result);
            var result = totalNumVowels("Hard work and commitment is the key of success");
            console.log(`Total no. of vowels in "Hard work and commitment is the key of success" are:`,result);


            
            console.log("----------Total chars in last word of string----------");
function lastWordCharsCount(str) {
    let count = 0;
    let lastWord = '';
    
    for (let index = str.length - 1; index >= 0; index--) {
      var char = str[index];
      
      if (char !== " ") {
        lastWord = char + lastWord;
      } else if (lastWord !== '') {
        break;
      }
    }
    
    count = lastWord.length;
    return count;
  }
  
 var result = "JavaScript is the language of internet";
  var count = lastWordCharsCount(result);
  console.log("last word count of string Javascriptis the language of internet is :",count); 

  var result = "I am Angular Developer";
  var count = lastWordCharsCount(result);
  console.log("last word count of string I am Angular Developer is :",count); 

  var result = "Hard work and commitment is the key of success";
  var count = lastWordCharsCount(result);
  console.log("last word count of string Hard work and commitment is the key of success :",count); 