const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, firstName: user.firstName, lastName: user.lastName,  token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// signup a user
const signupUser = async (req, res) => {
    const { email, password, firstName, lastName } = req.body
    console.log("from signup", email, password, firstName, lastName)

    try {
        const user = await User.signup(email, password, firstName, lastName)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token, firstName: user.firstName, lastName: user.lastName })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message })
    }
}

module.exports = { signupUser, loginUser }