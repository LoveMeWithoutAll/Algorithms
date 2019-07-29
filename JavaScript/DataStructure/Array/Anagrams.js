/*
Play anagrams

"aaagmnrs" is anagram of "anagrams".
Given string array, remove anagram of previous string, and then return sorted array.

For example, 
s = ['code', 'doce', 'ecod', 'framer', 'frame']
'doce', 'ecod' are all anagram of 'code, So remove in the array. 'frame' and 'framer' are not anagram of 'framer', because of 'r', so it remains in array. Finally, alphabetically sorted string array is ['code', 'frame', 'framer'].

s is array.

Constraint
1 ≤ n ≤ 1000
1 ≤ |s[i]| ≤ 1000

s[i]is in ascii[a-z]
 */

function anagrams(s) {

  let result = []
  let set = new Set()

  s.map(v => {
    const sorted = v.split('').sort()
    const joined = sorted.join('')
    set.add(joined)
  })

  s.map(v => {
    const sorted = v.split('').sort()
    const joined = sorted.join('')
    if (set.has(joined)) {
      result.push(v)
      set.delete(joined)
    }
  })

  return result.sort()
}

const input1 = ['code', 'doce', 'ecod', 'framer', 'frame']

console.log(anagrams(input1))
