console.log(document)
//
const numbersToCalc = []
let answer = ''
const sum = (total) => {
    console.log('this is the sum', total)
    numbersToCalc.reduce()
}

const getButtonValue = (buttonInnerText) => {
    if (buttonInnerText.id === 'addition') {
        let mathSign = buttonInnerText.innerText
        numbersToCalc.push(mathSign)
    } else {
        const innerTextToInt = parseInt(buttonInnerText.innerText)
        numbersToCalc.push(innerTextToInt)
    }
}

const textbox = document.getElementById('textbox')

const doMaff = () => {
    const firstVal = numbersToCalc[0]
    const mathSign = numbersToCalc[1]
    const secondVal = numbersToCalc[2]
    if (mathSign === '+') {
        answer = firstVal + secondVal
        textbox.value = answer
        const bigAnswer = document.createElement('h1')
        bigAnswer.innerText = 'CowBoy'
        container.append(bigAnswer)
    }
}
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const buttons = document.getElementsByTagName('button')
const equals = document.getElementById('equals')
const addition = document.getElementById('addition')

const container = document.getElementById('container')

addition.onclick = (e) => getButtonValue(e.target)
equals.onclick = doMaff
button1.onclick = (e) => getButtonValue(e.target)
button2.onclick = (e) => getButtonValue(e.target)
