function factorialOfWordsCount(str) {
  if (!str) {
    console.log("Factorial of null or empty string is 0");
    return;
  }
    let words = str.split(" ");
    let wordCount = words.length;

    let factorial = 1;
    for (let index = 1; index <= wordCount ; index++) {
        factorial= factorial * index;  
    }
  console.log(`Total number of words in string ${str} is :`, wordCount);
  console.log("Factorial of word count:", factorial);
}

factorialOfWordsCount("Revision is the mother of success");
factorialOfWordsCount(null);
factorialOfWordsCount("We never fail, we always learn");
factorialOfWordsCount("");
factorialOfWordsCount("Ajim Rajekhan Shikalgar")