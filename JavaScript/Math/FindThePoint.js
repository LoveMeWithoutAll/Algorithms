/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/find-point/problem
 */

function findPoint(px, py, qx, qy) {

    let finalX
    let finalY

    let xGap = 0
    if (px > qx) {
        xGap = Math.abs(px - qx)
        finalX = px - xGap * 2
    } else {
        xGap = Math.abs(qx - px)
        finalX = px + xGap * 2
    }

    let yGap = 0
    if (py > qy) {
        yGap = Math.abs(py - qy)
        finalY = py - yGap * 2
    } else {
        yGap = Math.abs(qy - py)
        finalY = py + yGap * 2
    }

    return [finalX, finalY]
}
