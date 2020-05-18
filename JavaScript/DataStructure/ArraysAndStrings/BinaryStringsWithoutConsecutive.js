/*
Given an integer K, print all binary strings of length K without consecutive 1s.

example
  input:5
  output: 00000 00001 00010 00100 00101 01000 01001 01010 10000 10001 10010 10100 10101

Reference: https://mailprogramming.com/solution/45?email=ys.ahn@outlook.com&token=0888591be0b2d92ca1a23d1b874e4f7a7e47ef9b43859c5adb5ef1ed678fe31f
*/

function solution(K) {
  const builder = n => {
    let set = new Set()
    set.add('0')
    set.add('1')
    
    set.forEach(v => {
      if (v.length === K) return 
      set.add(v + '0')
      if (v % 10 === 0) set.add(v + '1')
      set.delete(v)
    })

    return set
  }

  const result = builder(K)

  result.forEach(v => console.log(v))
}

solution(5)