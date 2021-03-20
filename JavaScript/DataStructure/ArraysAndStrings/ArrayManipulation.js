/*
Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

Example
    n = 10
    queries = [[1,5,3], [4,8,7], [6,9,1]]

    Queries are interpreted as follows:
        a b k
        1 5 3
        4 8 7
        6 9 1
    Add the values of  between the indices  and  inclusive:
        index->	 1 2 3  4  5 6 7 8 9 10
                [0,0,0, 0, 0,0,0,0,0, 0]
                [3,3,3, 3, 3,0,0,0,0, 0]
                [3,3,3,10,10,7,7,7,0, 0]
                [3,3,3,10,10,8,8,8,1, 0]
    The largest value is  after all operations are performed.

Function Description
    Complete the function arrayManipulation in the editor below.
    arrayManipulation has the following parameters:
    int n - the number of elements in the array
    int queries[q][3] - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

Returns
    int - the maximum value in the resultant array

Input Format
    The first line contains two space-separated integers  and , the size of the array and the number of operations. 
    Each of the next  lines contains three space-separated integers ,  and , the left index, right index and summand.

Constraints
    3 <= n <= 10**7
    1 <= m <= 2* 10**5
    1 <= a <= b <= n
    0 <= k <= 10**9

Sample Input
    5 3
    1 2 100
    2 5 100
    3 4 100
Sample Output
    200

Explanation
    After the first update the list is 100 100 0 0 0. 
    After the second update list is 100 200 100 100 100. 
    After the third update list is 100 200 200 200 100.
    The maximum value is 200.

Reference: https://www.hackerrank.com/challenges/crush/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
*/

// O(n**2)
function arrayManipulation0(n, queries) {
    let array = new Array(n).fill(0)
    queries.forEach(el => {
        const a = el[0]
        const b = el[1]
        const k = el[2]
        for (let idx = a; idx <= b; idx++) {
            array[idx-1] += k
        }
    })
    const result = Math.max(...array)
    return result
}


// O(n)
function arrayManipulation1(n, queries) {
    let arr = new Array(n+1).fill(0)

    queries.forEach(([a,b,k]) => {
        arr[a] += k
        arr[b+1] += -k
    })

    arr.filter(n => n !== 0)

    let max = 0
    let current = 0
    arr.forEach(n => {
        current = current + n
        if (current > max) max = current
    })

    return max
}

const n = 5
const queries = [[1, 2, 100]
,[2, 5, 100]
,[3, 4, 100]]

// console.log(arrayManipulation0(n, queries)) // 200
console.log(arrayManipulation1(n, queries)) // 200
