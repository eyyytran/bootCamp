const express = require('express')
const { User } = require('./models')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/users', async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})

app.get('/user_by_id/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id)
    res.send(user)
})

app.get('/user_by_name/:name', async (req, res) => {
    const name = req.params.name
    const user = await User.findOne({
        where: {
            firstName: name,
        },
    })
    res.send(user)
})
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
