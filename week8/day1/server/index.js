const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const { User } = require('../models')
const PORT = 3000
const router = express.Router()

const userRoutes = require('./user')

app.use(express.json())
app.use('/users', userRoutes)

app.listen(PORT, console.log(`listening at port ${PORT}`))
