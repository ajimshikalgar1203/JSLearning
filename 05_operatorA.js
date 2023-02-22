// Solution to problem 1
function squareOfWordLength(word) {
  var  length = word.length;
  var  square = length * length;
  console.log(`Length of '${word}' is ${length}. Its square is ${square}.`);
  return square;
}

squareOfWordLength("javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

// Solution to problem 2
function calculateStringMetrics() {
  const str = "I am Angular Developer";
  const words = str.split(" ");
  const wordCount = words.length;
  const strLength = str.length;
  
  const avgWordLength = strLength / wordCount;
  const totalLength = strLength * wordCount;

  console.log(`Length of string is '${strLength}'`);
  console.log(`Total words in given string '${wordCount}'`);
  console.log(`Average word length of '${str}' is ${avgWordLength}.`);
  console.log(`Total length of '${str}' is ${totalLength}.`);
}

// invoke the function to calculate string metrics
calculateStringMetrics();
