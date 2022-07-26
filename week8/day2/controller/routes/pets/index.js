const express = require('express')
const app = express()
const router = express.Router()

router.post('/make_pets', (req, res) => {
    res.send('made pet')
})

router.get('/get_pets', (req, res) => {
    res.render('index.html')
})

router.put('/update_pets', (req, res) => {
    res.send('updated pet')
})

router.delete('/delete_pets', (req, res) => {
    res.send('deleted pet')
})

module.exports = router
