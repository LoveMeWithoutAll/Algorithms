const getMaxProfit = (priceArray) => {
    let maxProfit = -Infinity
    let maxPrice = priceArray[0]

    for (let i = 1; i < priceArray.length; i++) {
        const currentBuyPrice = priceArray[i];

        const tempProfit = maxPrice - currentBuyPrice // 지금 팔 때 이익

        maxProfit = Math.max(maxProfit, tempProfit);
        maxPrice = Math.max(currentBuyPrice, maxPrice)
    }

    return maxProfit;
}

/**
 * 공매도 할 때 최대 수익은?
 * @param n 최대 보유 가능 일
 * @param v 주식 가격 배열(시계열)
 * @returns {number} 최대 수익
 */
function solution2(n, v) {
    let maxProfit = -Infinity

    let frontPointer = 0
    let backPointer = n

    while (backPointer <= v.length) {
        const tempArray = v.slice(frontPointer, backPointer)

        frontPointer++
        backPointer++

        // console.log(frontPointer, backPointer)

        const tempMaxProfit = getMaxProfit(tempArray)

        maxProfit = Math.max(maxProfit, tempMaxProfit)
    }

    return maxProfit
}

const solution = solution2

console.log(solution(10, [3, 1, 4, 1, 5, 9, 2, 6, 5, 3])) // 7
// console.log(solution(3, [3, 1, 4, 1, 5, 9, 6, 5, 3, 2])) // 4
// console.log(solution(10, [1, 2, 3, 4, 5,6, 7, 8, 9, 10])) // -1
// console.log(solution(6, [ 4, 1, 7, 6, 5, 2 ])) // 5
// console.log(solution(2, [ 4, 1, 7, 6, 5, 2 ])) // 5