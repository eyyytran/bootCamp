const express = require('express')
const creds = require('./server/databaseConnection.js')
const { Restaurants, Reviewers, Reviews } = require('./models')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Yay it worked')
})

app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurants.findAll()
    res.send(restaurants)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
