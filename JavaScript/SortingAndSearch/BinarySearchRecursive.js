/**
 * Created by ys on 18. 4. 16.
 */

let binarySearch = (arr, target, head, tail, mid) => {
  if (arr[mid] === target) return target
  
  if (head >= tail) return -1

  if (target > arr[mid]) {
      head = mid + 1
  } else if (target < arr[mid]) {
      tail = mid -1
  }

  mid = Math.floor((head + tail) / 2)

  return binarySearch(arr, target, head, tail, mid)
}

((array, target) => {
  "use strict"

  array.sort((a, b) => {
      return a - b
  })

  let head = 0
  let tail = array.length - 1
  let mid = Math.floor((head + tail) / 2)

  let result = binarySearch(array, target, head, tail, mid)
  
  if (result === -1) {
      console.log('Not found')
      return
  } else {
      console.log(`${result} is in there`)
  }

})([1,2,4,5,6,7,2,3,5,6,7,8], 4)
