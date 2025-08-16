const removeFromArray = function(arr, ...values) {
    for (const value of values) {
        while (arr.findIndex((arrVal) => arrVal === value) >= 0) {
            arr.splice(arr.findIndex((arrVal) => arrVal === value), 1);
        }
    }

    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
