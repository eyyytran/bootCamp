const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const petsRoutes = require('./routes/pets')
const es6Renderer = require('express-es6-template-engine')

//middleware
app.use(express.static('public'))
app.engine('html', es6Renderer)
app.set('views', './public/views')
app.set('view engine', 'html')

app.use(express.json())
app.use(cors())
//router
app.use('/pets', petsRoutes)

app.listen(PORT, console.log(`listening at port ${PORT}`))
