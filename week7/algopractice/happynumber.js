/**
 * @param {number} n
 * @return {boolean}
 */

const isHappy = (n, counter = 0) => {
    result = false
    if (counter < 8) {
        let arr = String(n)
            .split('')
            .map(num => num * num)
        let sum = arr.reduce((a, b) => a + b, 0)
        if (sum === 1) {
            return (result = true)
        } else {
            counter += 1
            isHappy(sum, counter)
        }
    }
    return result
}
console.log(isHappy(19))
