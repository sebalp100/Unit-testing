function capitalize(string) {
    const myNewString = string.toString().split("");
    const firstLetter = myNewString[0].toUpperCase();
    myNewString.shift();
    const joined = myNewString.join("");
    return firstLetter.concat(joined);

}

module.exports = capitalize;