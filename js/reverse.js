function reverseString(string) {
  const myArray = string.split("")
    .reverse()
    .join("");
  return myArray;
}

module.exports = reverseString;