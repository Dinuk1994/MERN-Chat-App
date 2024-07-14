import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password did not match" })
        }
        const user = await User.findOne({ userName })

        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }
        //HASH Password
        const hashedPassword = await bcrypt.hash(password, 10)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password : hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            gender: newUser.gender,
            profilePic: newUser.profilePic
        })

    } catch (err) {
        res.status(500).json({ error: "Internal Server error" })
    }
}

//-------------------------------------------------------------------

export const login = (req, res) => {
    console.log("Login");
}

export const logout = (req, res) => {
    console.log("Logout");
}

