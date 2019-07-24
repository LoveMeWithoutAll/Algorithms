/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 * Originally, tt is categorized under 'Dictionaries and Hashmaps' on Hackerrank
 */

function checkMagazine(magazine, note) {
    let tmpArr = magazine

    for (let idx = 0; idx < note.length; idx++) {
        let isThere = tmpArr.indexOf(note[idx])
        if (isThere === -1) {
            console.log('No')
            return
        } else {
            tmpArr.splice(isThere, 1)
        }
    }

    console.log('Yes')
}

const magazine = 'give me one grand today night'.split(' ')
const note = 'give one grand today'.split(' ')

// console.log(magazine.split(' '))

console.log(checkMagazine(magazine, note))
