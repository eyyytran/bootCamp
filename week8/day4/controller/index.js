const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/login', (req, res) => {
    res.send('login')
})

app.listen(PORT, console.log(`listening on port ${PORT}`))
