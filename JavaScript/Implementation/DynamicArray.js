/*
Create a list, seqList, of N empty sequences, where each sequence is indexed from 0 to N – 1. The elements within each of the N sequences also use 0-indexing.
Create an integer, lastAnswer, and initialize it to 0.

The 2 types of queries that can be performed on your list of sequences (seqList) are described below:
  Query: 1 x y
    Find the sequence, seq, at index ((x XOR lastAnswer)) % N) in seqList.
    Append integer y to sequence seq.
  Query: 2 x y
    Find the sequence, seq, at index ((x XOR lastAnswer)) % N) in seqList.
    Find the value of element y % size in seq (where size is the size of seq) and assign it to lastAnswer.
    Print the new value of lastAnswer on a new line

Task
  Given N, Q, and Q queries, execute each query.
  Note: bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia.

Input Format
  The first line contains two space-separated integers, N (the number of sequences) and Q (the number of queries), respectively.
  Each of the Q subsequent lines contains a query in the format defined above.

Constraints
  1 <= N, Q <= 1010
  0 <= x <= 109
  0 <= y <= 109
  It is guaranteed that query type 2 will never query an empty sequence or index.

Output Format
  For each type 2 query, print the updated value of lastAnswer on a new line.

Sample Input
  2 5
  1 0 5
  1 1 7
  1 0 3
  2 1 0
  2 1 1
Sample Output
  7
  3

Explanation
Initial Values:
  N = 2
  lastAnswer = 0
  S0 = []
  S1 = []

Query 0: Append 5 to sequence ((0 XOR 0) % 2) = 0
  lastAnswer = 0
  S0 = [5]
  S1 = []

Query 1: Append 7 to sequence ((1 XOR 0) % 2) = 1
  S0 = [5]
  S1 = [7]

Query 2: Append 3 to sequence ((0 XOR 0) % 2) = 0
  lastAnswer = 0
  S0 = [5,3]
  S1 = [7]

Query 3: Assign the value at index 0 of sequence ((1 XOR 0) % 2) = 1 to lastAnswer, print lastAnswer
  lastAnswer = 7
  S0 = [5,3]
  S1 = [7]
  result = [7]

Query 4: Assign the value at index 1 of sequence ((1 XOR 7) % 2) = 0 to lastAnswer, print lastAnswer
  lastAnswer = 3
  S0 = [5,3]
  S1 = [7]
  result = [7, 3]


Reference: https://www.hackerrank.com/challenges/dynamic-array/problem
*/

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
  let arr = []
  for (let idx = 0; idx < n; idx++) arr.push([])

  let lastAnswer = 0
  let result = []
  queries.forEach(([q, x, y]) => {
    const xor = x ^ lastAnswer
    switch (q) {
      case 1:
        arr[xor % n].push(y)
        break;
      case 2:
        const firstIdx = xor % n
        const secondIdx = y % arr[firstIdx].length
        lastAnswer = arr[firstIdx][secondIdx]
        result.push(lastAnswer)
        break;
    }
  })

  return result
}

const n = 2 // n is the number of array
const queries = [
  [1, 0, 5], // [q, x, y]
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1]
]

console.log(dynamicArray(n ,queries)) // [7, 3]
