const fibonacci = function(int) {
    //Check input
    //Convert strings to int
    int = parseInt(int);
    //Don't accept negatives
    if(int < 0){ 
        return "OOPS";
    }

    if(int == 0) return 0;
    if(int == 1) return 1;
    if(int == 2) return 1;

    return fibonacci(int - 2) + fibonacci(int - 1);
};

// Do not edit below this line
module.exports = fibonacci;
