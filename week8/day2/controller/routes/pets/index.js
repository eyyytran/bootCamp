const express = require('express')
const app = express()
const router = express.Router()
const { Pets } = require('../../../sequelize/models')

router.post('/make_pets', (req, res) => {
    res.send('made pet')
})

router.get('/get_pets', async (req, res) => {
    const petList = await Pets.findAll()
    res.render('index', {
        locals: { petList },
    })
})

router.put('/update_pets', (req, res) => {
    res.send('updated pet')
})

router.delete('/delete_pets', (req, res) => {
    res.send('deleted pet')
})

module.exports = router
