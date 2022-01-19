// Part 1: Google Chrome Browser, typeof

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

// // Expecting to return the sum of num1 + num2 in a numeric value.
// // Edge Cases: No Numbers are not allowed.
// // Potential Edge Cases: If number is in string format convert to number.
// //                      Nothing other than string or number allowed.
let add = () => {
    // console.log(typeof(num1.value));
    console.log(num1.value + num2.value);
}


// Part 2

// Iterates an array adding each element
// to sum should return 10.
let arr = [1,2,3,4]
let sum = 0;

for(let i = 0; i <= arr.length; i++) {
    sum += arr[i];
    console.log(sum);
}

console.log(sum);

// Part 3: Jasmine Testing
// Edge Cases: 
// 1.) Array passed in should be all numbers
// 2.) Array passed in should not be empty
let sumOfNumberArray = (arr) => {
    for(let i = 0; i <= arr.length; i++) {
        sum += arr[i];
        console.log(sum);
    }
}