import User from "../models/user.model.js";

export const getUsersForSideBar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id

        const filteredUSers = await User.find({_id : { $ne : loggedInUserId}}).select("-password")  //this part will filter current authenticate user
        res.status(200).json(filteredUSers)
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}