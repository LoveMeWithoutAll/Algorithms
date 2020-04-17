/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.
Note: Each term of the sequence of integers will be represented as a string.

Example 1:
Input: 1
Output: "1"
Explanation: This is the base case.

Example 2:
Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".

I will list out the first 10 terms to help visualize the sequence:

 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
10.     13211311123113112211

URL: https://medium.com/javascript-in-plain-english/apple-online-assessment-junior-developer-2717002043da
*/

function CountAndSaySequenceByFor(nth) {
    const sayIt = str => {
        let pointer = ''
        let cnt = 0
        let result = ''

        for (let idx = 0; idx < str.length; idx++) {
            if (pointer === str.charAt(idx)) {
                cnt++
                if (idx === str.length - 1) result = builder(pointer, cnt, result)
                continue
            }
            if (cnt !== 0) result = builder(pointer, cnt, result)
            pointer = str.charAt(idx)
            cnt = 1
            if (idx === str.length - 1) result = builder(pointer, cnt, result)
        }

        return result
    }

    const builder = (pointer, cnt, result) => {
        result += cnt.toString()
        result += pointer
        return result
    }

    let arr = ['1']

    for (let idx = 1; idx < nth; idx++) {
        let tmp = sayIt(arr[idx - 1])
        arr.push(tmp)
    }

    return arr.pop()
}

console.log(CountAndSaySequenceByFor(2)) // 11
console.log(CountAndSaySequenceByFor(9)) // 31131211131221
console.log(CountAndSaySequenceByFor(7)) // 13112221