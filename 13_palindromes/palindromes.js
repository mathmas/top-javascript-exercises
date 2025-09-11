const availablesChars = "abcdefghijklmnopqrstuvwxyz0123456789"

const palindromes = function (string) {
    //format string
    const formatedSting = string.toLowerCase()
    .split("")
    .filter((character) => availablesChars.includes(character))
    .join("");

    //create a reverse string
    const reversedString = formatedSting.split("")
    .reverse()
    .join("");

    //compare strings
    return formatedSting == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
