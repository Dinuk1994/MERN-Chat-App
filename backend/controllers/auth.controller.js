import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js';

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


        //https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if (newUser) {
            // Generate JWT Token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            })

        } else {
            res.status(400).json({ error: "Invalid User Data" })
        }

    } catch (err) {
        res.status(500).json({ error: "Internal Server error" })
    }
}

//-------------------------------------------------------------------

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({userName})
        const isPassword = await bcrypt.compare(password , user?.password || "");
        if(!user || !isPassword){
            return res.status(400).json({ error: "Invalid Credentials" })
        }
        generateTokenAndSetCookie(user._id , res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic,
        })
      
    } catch (err) {
        res.status(500).json({ error: "Internal Server error" })
    }
}

//-------------------------------------------------------------------

export const logout = (req, res) => {
    try {
        res.cookie("jwt" ,"",{maxAge:0});
        res.status(200).json({message : "Logged out Successfully"})
    } catch (err) {
        res.status(500).json({ error: "Internal Server error" })
    }
}

