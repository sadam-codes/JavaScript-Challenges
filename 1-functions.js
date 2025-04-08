//IIFI
((name = "Ali") => { console.log(`Hello ${name}`) })
    ("sadam")


// Write a function to check if a number is even or odd.
const checkNumber = (num) => {
    return num % 2 === 0 ? `${num} is Even` : `${num} is Odd`
}
console.log(checkNumber(3))

// 3. Write a function to reverse a string.

const reverseDtring = (str) => {
    return str.split("").reverse().join("")
}
console.log(reverseDtring("Ali"))

const checkPalondrom = (str) => {
    let reverse = str.split("").reverse().join("")
    return str === reverse
};
console.log(checkPalondrom("Sadam"))

// find sumof Al
const sumOfAll = (num) => {
    return num.reduce((a, b) => {
        return (a + b)
    }, 0)
}
console.log(sumOfAll([2, 3, 4]))

//  Write a function to check if an array contains a specific element.
const includes = (num, element) => {
    return num.includes(element)
}
console.log(includes([2, 3, 4], 3))

//  Write a function to generate a random number between two numbers.
const generateNumbers = (number01,  number02) => {
    return Math.random() * ( number02 - number01 + 1) + number01
}
console.log(generateNumbers(1, 2))

//  Write a function to remove duplicates from an array.
const removeDuplicates = (num)=>{
    return [... new Set(num)]
}
console.log(removeDuplicates([3,4,5,3,4,4,6]))