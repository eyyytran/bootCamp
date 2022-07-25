const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const { User } = require('../models')
const PORT = 3000

app.use(express.json())

// request object
// {
//     "username":"FooDawg",
//     "password":"12345"
// }
// req.body.password

app.post('/create_user', async (req, res) => {
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

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const findUser = await User.findOne({
            where: {
                username: username,
            },
        })
        const foundUser = findUser.dataValues
        const validated = await bcrypt.compare(password, foundUser.password)
        if (!findUser) {
            res.status(400)
                .send(
                    'This user was not found. Please check the username and password'
                )
                .redirect('/login')
        } else {
            res.status(200).send('Login successful')
        }
    } catch (error) {
        res.send('I did not find it')
    }
})

app.listen(PORT, console.log(`listening at port ${PORT}`))
