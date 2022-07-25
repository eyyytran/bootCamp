const express = require('express')
const app = express()
const PORT = 3000
const router = express.Router()
const userRoutes = require('./user')
const restaurantRoutes = require('./restaurants')

app.use(express.json())
app.use('/users', userRoutes)
app.use('/restaurants', restaurantRoutes)

app.listen(PORT, console.log(`listening at port ${PORT}`))
