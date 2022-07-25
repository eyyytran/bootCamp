const { Restaurants } = require('../../database/models')
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.get('/all_restaurants', async (req, res) => {
    try {
        const restaurantsToGet = await Restaurants.findAll()
        res.send(restaurantsToGet)
    } catch (error) {
        res.status(400).send('unable to find all restaurants')
    }
})

router.get('/find_by_id/', async (req, res) => {
    const { id } = req.body
    try {
        const restaurantsToGet = await Restaurants.findAll({
            where: {
                id: id,
            },
        })
        res.send(restaurantsToGet)
    } catch (error) {
        res.send('could not find restaurant by this id')
    }
})

router.get('/find_by_name/', async (req, res) => {
    const { name } = req.body
    try {
        const restaurantsToGet = await Restaurants.findAll({
            where: {
                name: name,
            },
        })
        res.send(restaurantsToGet)
    } catch (error) {
        res.send('could not find restaurant by this name')
    }
})

router.get('/find_by_address/', async (req, res) => {
    const { address } = req.body
    try {
        const restaurantsToGet = await Restaurants.findAll({
            where: {
                address: address,
            },
        })
        res.send(restaurantsToGet)
    } catch (error) {
        res.send('could not find restaurant by this address')
    }
})

router.post('/add_restaurant', async (req, res) => {
    const { name, address, reviewScore } = req.body
    const newRestaurant = {
        name: name,
        address: address,
        reviewScore: reviewScore,
    }
    const createRestaurant = await Restaurants.create(newRestaurant)
    res.send('I made a restaurant')
})

router.put('/update_name', async (req, res) => {
    const { name, newName } = req.body
    try {
        const findRestaurant = await Restaurants.findOne({
            where: {
                name: name,
            },
        })
        try {
            findRestaurant.update({
                name: newName,
            })
            res.send('Updated restaurant name')
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.put('/update_address', async (req, res) => {
    const { name, address, newAddress } = req.body
    try {
        const findRestaurant = await Restaurants.findOne({
            where: {
                name: name,
            },
        })
        try {
            findRestaurant.update({
                address: newAddress,
            })
            res.send('Updated restaurant address')
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete('/delete_by_id', async (req, res) => {
    const { id } = req.body
    try {
        const findRestaurant = await Restaurants.findOne({
            where: {
                id: id,
            },
        })
        findRestaurant.destroy()
        res.send('Restaurant deleted')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete('/delete_by_name', async (req, res) => {
    const { name } = req.body
    try {
        const findRestaurant = await Restaurants.findOne({
            where: {
                name: name,
            },
        })
        findRestaurant.destroy()
        res.send('Restaurant deleted')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router
