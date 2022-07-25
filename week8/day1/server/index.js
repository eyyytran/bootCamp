const express = require('express')
const app = express()
const PORT = 3000
const router = express.Router()
const userRoutes = require('./user')
const restaurantRoutes = require('./restaurants')
const es6Renderer = require('express-es6-template-engine')

app.engine('html', es6Renderer)
app.set('views', './public/views')
app.set('view engine', 'html')
app.use(express.static('public'))

app.use(express.json())
app.use('/users', userRoutes)
app.use('/restaurants', restaurantRoutes)

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, console.log(`listening at port ${PORT}`))
