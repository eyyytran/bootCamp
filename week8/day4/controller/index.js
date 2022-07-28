const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const es6Renderer = require('express-es6-template-engine')
const { Users, Sessions } = require('../sequelize/models')
const models = require('../sequelize/models')
const users = require('../sequelize/models/users')
const app = express()
const PORT = 3000
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const store = new SequelizeStore({ db: models.sequelize })

app.engine('html', es6Renderer)
app.set('views', 'views')
app.set('view session', 'html')

app.use(express.json())
app.use(cookieParser())
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        store: store,
        cookie: {
            maxAge: 60 * 60 * 1000 * 24 * 7,
        },
    })
)
store.sync()

const checkLogin = (req, res, next) => {
    const sessionValid = Sessions.findOne({
        where: {
            sid: req.session.session.sid,
        },
    })
    if (sessionValid) {
        next()
    } else {
        res.json({
            message: 'login failed',
        })
    }
}

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

app.post('/delete_all_secrets', checkLogin, async (req, res) => {
    res.send('Omg you deleted everything...')
})

app.get('/home', checkLogin, (req, res) => {
    res.render('index', { locals: { name: req.session.username } })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
