//STEP 1
function halfNumber(num) {
    var half = num / 2;
    window.console.log("Half of " + num + " is " + half + ".");
    return half;
}
//STEP 2
function squareNumber(num) {
    var square = num * num;
    window.console.log("The result of squaring the number " + num + " is " + square + ".");
    return square;
}
//STEP 3
function percentOf(num1, num2) {
    var percent = (num1 / num2) * 100;
    window.console.log(num1 + " is " + percent + "% of " + num2 + ".");
    return percent;
}
//STEP 4
function findModulus(num1, num2) {
    var mod = num2 % num1;
    window.console.log(mod + " is the modulus of " + num1 + " and " + num2 + ".");
    return mod;
}
//STEP 5
function sumOfNumbers(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }

    return sum;
}

function getSum() {
    var prompt = window.prompt("Enter a list of numbers separated by commas");
    numbers = prompt.split(',');
    window.console.log("The sum of the numbers entered is " + sumOfNumbers(numbers) + ".");
}

getSum();