//    https://en.wikipedia.org/wiki/Fibonacci_number

function fibonacci(n) {
    const fib = (n) => {
        if (n <= 0) return 0
        if (n === 1) return 1

        return fib(n-1) + fib(n-2)
    }

    let resultArr = []

    for (let idx = 0; idx < n; idx++) {
        resultArr.push(fib(idx))
    }

    return resultArr
}

const n = 20

fibonacci(n).map(n => console.log(n))
