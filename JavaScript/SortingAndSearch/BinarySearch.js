/**
 * Created by ys on 18. 4. 16.
 */
((array, target) => {
    "use strict"

    array.sort((a, b) => {
        return a - b
    })

    let head = 0
    let tail = array.length - 1

    while (tail >= head) {
        let mid = Math.floor((head + tail) / 2)
        if (array[mid] === target) {
            console.log(`${mid} is in there`)
            return mid
        } else if (array[mid] > target) {
            tail = mid - 1
        } else if (array[mid] < target) {
            head = mid + 1
        }
    }

    console.log('Not found')
    return -1

})([1,2,4,5,6,7,2,3,5,6,7,8], 4)

