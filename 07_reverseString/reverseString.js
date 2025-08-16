const reverseString = function(string) {
    const arr = string.split("");
    let returnString = "";
    for(let i = arr.length -1; i >= 0; i--){
        returnString += arr[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
