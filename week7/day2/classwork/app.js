import express from 'express'
import es6Renderer from 'express-es6-template-engine'

const app = express()
const PORT = 3000

app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))
