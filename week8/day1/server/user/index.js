const { User } = require('../../database/models')
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.get('/all_users', async (req, res) => {
    const usersToGet = await User.findAll()
    res.send(usersToGet)
})

router.get('/by_id/:id', async (req, res) => {
    const { id } = req.params
    const usersToGet = await User.findAll({
        where: {
            id: id,
        },
    })
    res.send(usersToGet)
})

router.post('/create_user', async (req, res) => {
    const { username, password } = req.body
    try {
        const salt = await bcrypt.genSalt(5)
        const hashedPassword = await bcrypt.hash(password, salt)
        const encryptedUser = {
            username: username,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        const createUser = await User.create(encryptedUser)
        res.send(createUser)
    } catch (error) {
        res.send(error)
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const findUser = await User.findOne({
            where: {
                username: username,
            },
        })
        const foundUser = findUser.dataValues
        const validated = await bcrypt.compare(password, foundUser.password)
        if (!validated) {
            res.status(400).send(
                'This user was not found. Please check the username and password'
            )
        } else {
            res.status(200).send('Login successful')
        }
    } catch (error) {
        res.send('I did not find it')
    }
})

router.put('/update_password', async (req, res) => {
    const { username, password } = req.body
    try {
        const findUser = await encryption.findOne({
            where: {
                username: username,
            },
        })
        try {
            const salt = await bcrypt.genSalt(5)
            const hashedPassword = await bcrypt.hash(password, salt)
            findUser.password = hashedPassword
            findUser.update({
                username: username,
                password: hashedPassword,
                updateAt: new Date(),
            })
            res.send('Updated password')
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete('/delete_password', async (req, res) => {
    const { username } = req.body
    try {
        const findUser = await User.findOne({
            where: {
                username: username,
            },
        })
        findUser.destroy()
        res.send('User deleted')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router
