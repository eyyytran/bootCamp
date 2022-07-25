const { User } = require('../../models')
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

router.post('/update_password', async (req, res) => {
    const { username, password } = req.body
    try {
        const findUser = await User.findOne({
            where: {
                username: username,
            },
        })
        try {
            const salt = await bcrypt.genSalt(5)
            const hashedPassword = await bcrypt.hash(password, salt)
            const updatedUser = await User.update(req.body, {
                where: {
                    username: username,
                    password: hashedPassword,
                    updatedAt: new Date(),
                },
            })
            res.status(200).send('Password Updated')
        } catch (error) {
            res.status(400).send('Unable to update password')
        }
    } catch (error) {
        res.send('Unable to find user')
    }
})

router.post('/delete_user', async (req, res) => {
    const { username, password } = req.body
    try {
        const findUser = await User.findOne(req.body, {
            where: {
                username: username,
            },
        })
        const foundUser = findUser.dataValues
        const validated = await bcrypt.compare(password, foundUser.password)

        if (validated === false) {
            res.status(400).send('Wrong password')
        } else {
            const deleteUser = await User.destroy({
                username: username,
            })
            res.status(200).send('Successfully deleted user')
        }
    } catch (error) {
        res.send('I did not find it')
    }
})

module.exports = router
