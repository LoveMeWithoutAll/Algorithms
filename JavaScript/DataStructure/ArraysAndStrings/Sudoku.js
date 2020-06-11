/*
Valid Sudoku

Brute force solution

Reference: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // horizontal
  for (let idx = 0; idx < 9; idx++) {
    let set = new Set()
    for (let jdx = 0; jdx < 9; jdx++) {
      const pointer = board[idx][jdx]
      if (pointer === '.') continue
      if (set.has(pointer)) {
        return false
      } else {
        set.add(pointer)
      }
    }
  }

  //  vertical
  for (let idx = 0; idx < 9; idx++) {
    let set = new Set()
    for (let jdx = 0; jdx < 9; jdx++) {
      const pointer = board[jdx][idx]
      if (pointer === '.') continue
      if (set.has(pointer)) {
        return false
      } else {
        set.add(pointer)
      }
    }
  }

  // 3x3
  for (let idx = 0; idx < 9; idx += 3) {
    for (let jdx = 0; jdx < 9; jdx += 3) {
      let set = new Set()
      for (let kdx = 0; kdx <3; kdx++) {
        for (let ldx = 0; ldx <3; ldx++) {
          const pointer = board[idx+kdx][jdx+ldx]
          if (pointer === '.') continue
          if (set.has(pointer)) {
            return false
          } else {
            set.add(pointer)
          }
        }
      }
    }
  }

  return true
};

console.log(isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
])) // true

console.log(isValidSudoku([
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
])) // false

console.log(isValidSudoku([
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."]
])) // false
