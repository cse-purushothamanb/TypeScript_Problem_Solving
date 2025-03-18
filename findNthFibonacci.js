function findNthFibonacci(n) {
    // Write your code here.
    if (n < 1) {
        return "Incorrect Input";
    } else if (n === 0) {
        return 0;
    } else if (n === 1 | n === 2) {
        return 1;
    } else {
        return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);   
    }
}



module.exports.findNthFibonacci = findNthFibonacci;
