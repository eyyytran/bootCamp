const redShirts = [1, 3, 4, 5, 8]
const blueShirts = [2, 4, 5, 6, 9]

const classPhoto = (redShirts, blueShirts) => {
    let counterA = 0
    let counterB = 0
    let row1 = []
    let row2 = []
    redShirts.sort((a, b) => {
        return a - b
    })
        return a - b
    })

    for (counterA in redShirts) {
        for (counterB in blueShirts) {
            if (redShirts[counterA] < blueShirts[counterB]) {
                let removedA = redShirts.shift()
                console.log('removed element', removedA )
                row1.push(removedA)
                console.log('row1', row1)
                let removedB = blueShirts.shift()
                
            } else {
                console.log(
                    'red',
                    redShirts[counterA],
                    'blue',
                    blueShirts[counterB],
                    false
                )
            }
            console.log('I got here')
        }
    }
}

classPhoto(redShirts, blueShirts)
