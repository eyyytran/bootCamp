console.log('I am on the client')
const button = document.getElementById('submit-button')

const sendData = async () => {
    const input = document.getElementById('user-input').value
    const data = { message: input }
    const dataWeAreSending = await fetch('http://localhost:3000/home', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    console.log(dataWeAreSending)
    const json = await dataWeAreSending.json()
    console.log(json)
}

button.onclick = () => sendData()
