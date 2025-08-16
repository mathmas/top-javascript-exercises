const sumAll = function(a, b) {
    if(a < 0 || b < 0) return "ERROR";
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    let sum = 0;
    let bigger;
    let smaller;
    if(a < b){
        bigger = b;
        smaller = a;
    }else{
        bigger = a;
        smaller = b;
    }


    for(let i = smaller; i <= bigger; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
