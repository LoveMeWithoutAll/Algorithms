/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/sock-merchant/problem
 */

function sockMerchant(n, ar) {
  const sortedAr = ar.map(Number).sort((a, b) => a - b)

  const min = sortedAr[0]
  const max = sortedAr[n - 1]

  const set = new Set(sortedAr)

  let cnt = 0

  set.forEach(s => {
    let filted = sortedAr.filter(n => s === n)
    cnt += Math.floor(filted.length / 2)
  })

  return cnt
}
