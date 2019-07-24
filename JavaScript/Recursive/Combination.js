function combination (n, r) {
  if (n === r || r === 0) return 1
  if (n - r === 1) return n

  return combination(n-1, r-1) + combination(n - 1, r)
}

const n = 40
const r = 6

console.log(combination(n, r))
