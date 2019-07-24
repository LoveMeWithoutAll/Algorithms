function bubbleSort (arr) {
    for (let idx = 0; idx < arr.length; idx++) {
        for (let jdx = arr.length-1; jdx > idx; jdx--) {
            if (arr[idx] > arr[jdx]) {
                let tmp = arr[idx]
                arr[idx] = arr[jdx]
                arr[jdx] = tmp
            }
        }
    }
    return arr
}

const arr = [5,2,3,6,8,34,3,5,789,8,7,0,3,2]

console.log(bubbleSort(arr))
