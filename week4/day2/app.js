console.log(document)
//
const button1 = parseInt(document.getElementById('button1').innerText)
const buttons = document.getElementsByTagName('button')
for (const button of buttons) {
    console.log(button.innerText)
}

const addition = (number) => {
    let sum = number + number
    console.log(sum)
}

addition(button1)
