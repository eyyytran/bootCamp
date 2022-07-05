//there are two ways to handle a promise:
//.then
//async await ES6 <- we'll probably use this
const getCoffee = new Promise((resolve, reject) => {
    const coffee = 'blonde roast'
    if (coffee === 'black') {
        resolve('I have your black coffee')
    } else {
        reject('I do not have your black coffee')
    }
})

getCoffee
    .then(message => console.log(message))
    .catch(error => console.log(error))

async function order() {
    try {
        const coffeeTime = await getCoffee
        console.log(getCoffee)
    } catch (error) {
        console.log(error)
    }
}

order()
