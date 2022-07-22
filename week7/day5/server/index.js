const express = require('express')
const { User, Longboard, Order } = require('../database/models')
const app = express()
const PORT = 3000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
