let numbers = [5, 3, 8, 1, 2];

function addNumber(array, number) {
    array.push(number);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if(index!== -1) {
        array.splice(index, 1);
    }
}

function sortNumber(array) {
    return array.splice().sort((a, b) => a -b);

}

function calculateSum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

function calculateAverage(array) {
    return calculateSum(array) / array.length;
}

console.log("orignial array", numbers);

addNumber(numbers, 4);
console.log("after adding 4", numbers);

removeNumber(numbers, 3);
console.log("after removijng 2", numbers);

let sortedArray = sortNumbers(numbers);
console.log("Sorted Array:", sortedArray);

let sum = calculateSum(numbers);
console.log("Sum of Numbers:", sum);

let average = calculateAverage(numbers);
console.log("Average of Numbers:", average);

