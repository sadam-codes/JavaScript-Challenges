const { log } = require("console")

//  Check if a ${num} Positive, Negative, or Zero
const checkNumber = (num) => {
    return num === 0 ? `${num} is Zero Number` : num < 0 ? `${num} is negative Number` : ` ${num} is Positive Number`
}
console.log(checkNumber(0))
console.log(checkNumber(-4))
console.log(checkNumber(4))

// Write a function that takes three numbers and returns the largest of them.
const largestNumber = (num1, num2, num3) => {
    return num1 >= num2 && num1 >= num3 ? `${num1} is Largest Number` :
        num2 >= num1 && num2 >= num3 ? `${num2} is Largest Number` :
            `${num3} is Largest Number`
}
console.log(largestNumber(3, 10, 4, 5))

// Write a function that checks if a number is divisible by both 3 and 5.

const CheckNumberDividale = (num) => {
    return num % 3 === 0 && num % 5 === 0 ?
        `The number ${num} is divisible by both 3 and 5.`
        : `The number ${num} is not divisible by both 3 and 5.`;
}
console.log(CheckNumberDividale(15))

// Write a function that checks if a string is empty.
const checkStringEmpty = (str) => {
    return str === "" ? "Empty String" : "Not Empty String"
}
console.log(checkStringEmpty('3'))

// 
const number = [1, 2, 3, 4, 5]
if (number.includes(5)) {
    console.log("5 is present ")
}
else {
    console.log("5 is Not")
}

const Myage = 18;
console.log(Myage <= 18 ? "Adult" : "Child")

