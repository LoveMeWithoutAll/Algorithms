const sortCoffee = (arr) => {
    return arr.sort((a,b) => a.time - b.time).map(element => element.index)
                                            .map(element => element + 1)
}

/**
 * 작업 스케쥴링 문제
 * 특이 사항: 커피가 동시에 제작되면 먼저 주문 들어온 커피부터 내보낸다
 * @param N 동시 제작 가능한 커피의 수
 * @param coffee_times 각 커피 주문마다 필요한 시간(시계열 배치)
 * @returns [] 제작 완료된 커피의 주문 번호부터 오름차순으로 정렬
 */
function solution(N, coffee_times) {
    if (N === 1) return coffee_times.map((v,index) => index+1) // 예외 처리

    let waitingArray = coffee_times.map((time,index) => {
        return ({time, index: index + 1})
    }) // 전처리

    if (coffee_times.length <= N) return sortCoffee(waitingArray) // 예외 처리

    let answer  = []


    // 커피 메이커 초기화
    let coffeeMaker = Array.from({length: N}).fill(false) // false면 비어있는 거
    for (let i = 0; i < N; i++) {
        if (waitingArray.length > 0) coffeeMaker[i] = waitingArray.shift() // 커피 제작 시작
    }

    // console.log(coffeeMaker)

    while (true) {
        // 현재 제작 중인 커피 중 최소 시간일 걸리는 커피 찾기
        const activeTimes = coffeeMaker.filter(c => c !== false).map(c => c.time)
        const minTime = Math.min(...activeTimes); // 즉시 점프하기 위해 가장 적게 남은 시간을 찾아

        if (activeTimes.length === 0) break // 전부 false면 종료 !!!!!!!

        // 시간 점프
        coffeeMaker = coffeeMaker.map(coffee => {
            if (coffee === false) return false

            return { ...coffee, time: coffee.time - minTime }
        })

        // 제작 완료된 커피 찾기
        const finishedCoffees = coffeeMaker.filter(c => c !== false && c.time === 0)

        // 정렬해서 answer에 넣기
        if (finishedCoffees.length > 0) {
            const sortedFinishedCoffeeIndexArray = finishedCoffees.sort((a, b) => a.index - b.index)
                                                                        .map(v => v.index)

            answer = answer.concat(sortedFinishedCoffeeIndexArray)
        }

        // 새 주문 투입
        coffeeMaker = coffeeMaker.map(coffee => {
            if (coffee !== false && coffee.time > 0) return coffee // 제작 중인 건 그냥 두고

            return waitingArray.length > 0 ? waitingArray.shift() : false
        })
    }

    return answer
}

console.log(solution(3, [4, 2, 2, 5, 3])) // [2, 3, 1, 5, 4]