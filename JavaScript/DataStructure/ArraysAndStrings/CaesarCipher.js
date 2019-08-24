/**
 * Caesar Cipher(시저 암호)
 * Reference1: http://tryhelloworld.co.kr/challenge_codes/22
 * Reference2: https://en.wikipedia.org/wiki/Caesar_cipher
 * Description
 * replace each plaintext letter with a different one a fixed number of places down the alphabet
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
 * A를 3만큼 밀면 D가 되고 z를 1만큼 밀면 a가 됩니다. 공백은 수정하지 않습니다.
 * 보낼 문자열 s와 얼마나 밀지 알려주는 n을 입력받아 암호문을 만드는 ceasar 함수를 완성해 보세요.
 * “a B z”,4를 입력받았다면 “e F d”를 리턴합니다.
 */

function CaesarCipher (s, n) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const strArr = s.split('')
    let resultArr = []

    strArr.map(s => {
        if (s === ' ') resultArr.push(' ')
        if (lower.includes(s)) {
            const idx = lower.indexOf(s)
            const target = lower.substr((n + idx) % 26, 1)
            resultArr.push(target)
        } else if (upper.includes(s)) {
            const idx = upper.indexOf(s)
            const target = upper.substr((n + idx) % 26, 1)
            resultArr.push(target)
        } else {
            resultArr.push(s)
        }
    })

    const result = resultArr.join('')

    return result
}

const s = 'a B z'
const n = 4

console.log(CaesarCipher(s, n))
