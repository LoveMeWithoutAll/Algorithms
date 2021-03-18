/*
There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Example
    strings: [def, de, fgh]
    queries: [de,lmn,fgh]
    output: [1, 0, 1]

Reference: https://www.hackerrank.com/challenges/sparse-arrays/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=60-day-campaign&isFullScreen=true
*/

function matchingStrings(strings, queries) {
    let resultArr = []
    
    const cb = (inputStr, targetStrings) => targetStrings.filter(v => v === inputStr).length
    
    resultArr = queries.map(v => cb(v, strings))
    
    return resultArr
}
