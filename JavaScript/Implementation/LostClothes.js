/*
EN
    Some students had their gym clothes stolen during lunch break. Fortunately, a student with extra gym clothes tries to lend them gym clothes. Students are numbered in order of physique, so they can only lend gym clothes to students at the very front or at the very back. For example, students No. 4 can only lend gym clothes to students No. 3 or No. 5. Since you can't take classes without gym clothes, as many students as possible should borrow gym clothes properly.
    Write the solution function to return the maximum value of a student who can take a physical education class when the parameters are given n the number of students who have stolen their gym clothes, the array lost with the number of students who have imported spare suits.

KO
    점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
    전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

EN
    Constraints
        The total number of students is 2 to 30 or less.
        The number of students whose gym clothes have been stolen is more than one or less than n and there are no overlapping numbers.
        The number of students who bring extra sportswear is one or more students, n or less, and there are no overlapping numbers.
        Only students with spare gym clothes can lend gym clothes to other students.
        A student who brought extra gym clothes may have been robbed. At this time, this student assumes that only one of his gym clothes has been stolen, and he cannot lend his gym clothes to other students because he has one left.

KO
    제한사항
        전체 학생의 수는 2명 이상 30명 이하입니다.
        체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
        여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
        여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
        여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

Example
    n	lost	reserve	    return
    5	[2, 4]	[1, 3, 5]	  5
    5	[2, 4]	[3]	          4
    3	[3]	    [1]	          2

Explain
    example #1
        EN: If student No. 1 lends gym clothes to student No. 2, student No. 3 or student No. 5 lends gym clothes to student No. 4, five students can take physical education classes.
        KO: 1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.
    example #2
        EN: If student number 3 lends gym clothes to student number 2 or student number 4, 4 students can take physical education classes.
        KO: 3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.
*/

function solution1(n, lost, reserve) {
    const realLost = lost.filter(v => !reserve.includes(v))
    const realReserve = reserve.filter(v => !lost.includes(v))
    let remainder = [...realReserve]
    realLost.map(v => {
        let idx = -1
        idx = remainder.findIndex(n => n === v-1)
        if (idx !== -1) {
            remainder.splice(idx, 1)
            return
        }

        idx = remainder.findIndex(n => n === v+1)
        if (idx !== -1) {
            remainder.splice(idx, 1)
            return
        }
    })

    const helperNumber = realReserve.length - remainder.length
    return n - realLost.length + helperNumber
}

// console.log(solution1(5, [2,4], [1,3,5])) // 5
// console.log(solution1(5, [2,4], [3])) // 4
// console.log(solution1(3, [3], [1])) // 2
// console.log(solution1(5, [1, 2, 3, 4, 5], [])) //0
console.log(solution1(5, [2, 4], [1, 5])) // 5