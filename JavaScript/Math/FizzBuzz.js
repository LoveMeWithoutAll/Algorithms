/*
Fizz Buzz

URL: https://leetcode.com/problems/fizz-buzz/

Description
 Write a program that outputs the string representation of numbers from 1 to n.
 But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:
 n = 15,
 Return:
 [
     "1",
     "2",
     "Fizz",
     "4",
     "Buzz",
     "Fizz",
     "7",
     "8",
     "Fizz",
     "Buzz",
     "11",
     "Fizz",
     "13",
     "14",
     "FizzBuzz"
 ]
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = []
    let idx = 1
    while (true) {
        if (idx > n) break;
        if (idx % 15 === 0) {
            arr.push("FizzBuzz")
            idx++
            continue
        } else if (idx % 5 === 0) {
            arr.push('Buzz')
            idx++
            continue
        } else if (idx % 3 === 0) {
            arr.push('Fizz')
            idx++
            continue
        } else {
            arr.push(idx.toString())
        }
        idx++
    }
    return arr
};

console.log(fizzBuzz(15))