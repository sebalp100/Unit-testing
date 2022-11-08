function stringLength(string) {
  const myArray = string.split("")
    .map(element => element.trim())
    .filter(element => element !== '');
  if (myArray.length > 0 && myArray.length < 11) {
    return myArray.length;
  }
  return 'string not long enough'

}

module.exports = stringLength;