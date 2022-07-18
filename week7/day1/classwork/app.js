import express from 'express'
import * as cowsay from 'cowsay'
import * as dns from 'dns'
import * as readline from 'readline'
const PORT = 3000
const app = express()

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

userInput.question('Domain Name: ', url => {
    userInput.close()
    dns.lookup(url, (error, address) => {
        if (error) {
            console.log('this is an error')
            return
        }
        console.log('IP Address: ', address)
    })
})

app.listen(PORT)
