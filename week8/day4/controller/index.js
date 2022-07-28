const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const { Users } = require('../sequelize/models')
const users = require('../sequelize/models/users')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cookieParser())
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    })
)

app.post('/login', async (req, res) => {
    // console.log(req.session)
    const user = await Users.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
        },
    })
    if (user) {
        req.session.user = user
        // console.log(req.session)
        res.json({
            message: 'Login Success',
            user: user,
        })
    } else {
        res.json({
            message: 'Login Failed',
        })
    }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
