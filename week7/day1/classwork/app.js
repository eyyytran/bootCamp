import express from 'express'
import * as cowsay from 'cowsay'
import * as dns from 'dns'
import * as readline from 'readline'
import * as fs from 'fs'

const PORT = 3000
const app = express()

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// userInput.question('Domain Name: ', url => {
//     userInput.close()
//     dns.lookup(url, (error, address) => {
//         if (error) {
//             console.log('this is an error')
//             return
//         }
//         console.log('IP Address: ', address)
//     })
// })

// userInput.question('File Name: ', file => {
//     userInput.close()
//     fs.readFile(file, 'utf8', (error, data) => {
//         if (error) {
//             console.log('error')
//             return
//         }
//         data = data.toString()
//         data = data.toUpperCase()
//         console.log(data)
//     })
// })
userInput.question('Input File: ', file1 => {
    fs.readFile(file1, 'utf8', (error, data) => {
        if (error) {
            console.log(`this file does not exist, ${file1}`)
            userInput.close()
            return
        }
        data = data.toString()
        data = data.toUpperCase()
        userInput.question('Output File: ', file2 => {
            if (error) {
                console.log(`this file does not exist, ${file2}`)
                userInput.close()
                return
            }
            fs.appendFile(file2, data, error => {
                if (error) {
                    console.log(`this file does not exist`)
                    return
                }
                console.log(`Wrote to file ${file2}`)
            })
        })
    })
})

app.listen(PORT)
