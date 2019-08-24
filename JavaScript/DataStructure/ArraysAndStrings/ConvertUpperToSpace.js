let str = `* BinaryGap
* ChocolatesByNumbers
* CountCars
* CountDiv
* CountFactors
* EquiLeader
* FindMinPrimeFactor
* FrogJump
* IsPrimeNumber
* MinMaxHoliday
* MinPerimeterRectangle
* MultiplesOf3and5
* PermCheck
* SieveOfEratosthenes`

const regex_upperWithoutHeader = /\B[A-Z]/g
let noMiddleUpper = str.replace(regex_upperWithoutHeader, match => ' ' + match.toLowerCase())

const regex_digitWithSpace = /\d/g
let noMiddleDigit = noMiddleUpper.replace(regex_digitWithSpace, match => ' ' + match + ' ')

console.log(noMiddleDigit)
