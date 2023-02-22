function stringHandsOn() {
  const str = "  hey you are doing good keep it up  ";

  // 1. print the string as it is on console
  console.log(str);

  // 2. calculate length of the string
  const length = str.length;
  console.log(`Length of the string: ${length}`);

  // 3. remove the leading and trailing extra spaces and lock string on console with its length
  const trimmedStr = str.trim();
  const trimmedLength = trimmedStr.length;
  console.log(`Trimmed string: ${trimmedStr}\nTrimmed string length: ${trimmedLength}`);

  // 4. Print the total number extra spaces count that is removed in 3.
  const extraSpaces = length - trimmedLength;
  console.log(`Extra spaces removed: ${extraSpaces}`);

  // 5. Print the first and last character on the same line after trim.
  const firstChar = trimmedStr.charAt(0);
  const lastChar = trimmedStr.charAt(trimmedLength - 1);
  console.log(`First character: ${firstChar}\nLast character: ${lastChar}`);

  // 6. print the count of total words available in the string after 3
  const wordsCount = trimmedStr.split(" ").length;
  console.log(`Total words count: ${wordsCount}`);

  // 7. print index of word good from the given string
  const goodIndex = trimmedStr.indexOf("good");
  console.log(`Index of "good": ${goodIndex}`);

  // 8. print substring starting from Index 22 using substring and slice
  const substr1 = trimmedStr.substring(22);
  const substr2 = trimmedStr.slice(22);
  console.log(`Substring using substring(): ${substr1}\nSubstring using slice(): ${substr2}`);

  // 9. check if the string ends with word "up" after 3
  const endsWithUp = trimmedStr.endsWith("up");
  console.log(`String ends with "up" after trim: ${endsWithUp}`);

  // 10. check if the string starts with word "hey" after trimming
  const startsWithHey = trimmedStr.startsWith("hey");
  console.log(`String starts with "hey" after trim: ${startsWithHey}`);
}

// invoke the function
stringHandsOn();
