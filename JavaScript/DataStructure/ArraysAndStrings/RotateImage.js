/*
Rotate Image

You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).
Note:
  You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:
  Given input matrix =
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  rotate the input matrix in-place such that it becomes:
  [
    [7,4,1],
    [8,5,2],
    [9,6,3]
]

Example 2:
  Given input matrix =
  [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ],
  rotate the input matrix in-place such that it becomes:
  [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
  ]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
  // assertion
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return;

  // rotate
  for (let layer = 0; layer < matrix.length / 2; layer++) {
    let first = layer;
    let last = matrix.length - 1 - layer
    for (let idx = first; idx < last; idx++) {
      let offset = matrix.length - 1 - idx
      let temp = matrix[first][idx] // top -> temp
      matrix[first][idx] = matrix[offset][first] // left -> top
      matrix[offset][first] = matrix[last][offset] // bottom -> left
      matrix[last][offset] = matrix[idx][last] // right -> bottom
      matrix[idx][last] = temp // temp -> right
    }
  }
};

const printMatrix = matrix => {
  matrix.forEach(element => {
    console.log(element)
  });
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

rotate(matrix)
printMatrix(matrix)