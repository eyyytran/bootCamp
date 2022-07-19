import express from 'express'
import es6Renderer from 'express-es6-template-engine'

const app = express()
const PORT = 3000

//middleware goes here

app.engine('html', es6Renderer) //accept html and extract it using es6
app.set('views', 'templates') //the html files will be found in a folder called templates
app.set('view engine', 'html') //whn you view these files, they will be rendered as html
app.use(express.static('public')) //lets us use local pathing for html/css
app.use(express.json())

//routes
app.get('/', (req, res) => {
    // res.send('hello from express')
    const user = { name: 'joe' }
    res.render('home', {
        locals: {
            user: user,
            teacher: 'Stacy',
            students: ['Amanda', 'Carlos'],
        },
    })
})
app.get('/about', (req, res) => {
    // res.send('hello from express')
    res.render('about')
})

app.post('/home', (req, res) => {
    console.log(req.body.message)
    res.json(req.body.message)
})

app.listen(PORT, console.log(`listening on port ${PORT}`))
