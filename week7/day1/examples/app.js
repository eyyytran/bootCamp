// const app = require('express')
import express from 'express'
import * as cowsay from 'cowsay'
const app = express()
const PORT = 3050
app.use(express.json())
//routes - you can only send back a response one time
//will usually have the htpp method on it (ex. GET)
//it will always be in this order (a request and a response)

app.get('/cow', (req, res) => {
    res.send(
        cowsay.say({
            text: 'Hello',
            e: '00',
            T: 'U',
        })
    )
})

app.post('/cow2', (req, res) => {
    res.send(req)
})

app.get('/', (req, res) => {
    //inside of this function body, you can do whatever you need to do in JS. When you call this route, it will call the code.
    res.send('this is the home page')
})

app.get('/benji', (req, res) => {
    res.send('lizard')
})

app.post('/beer', (req, res) => {
    res.send('beer')
})

app.listen(PORT, console.log(`listening on ${PORT}`))
