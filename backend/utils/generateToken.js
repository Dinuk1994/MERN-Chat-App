import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn : "15d"
    })
    res.cookie("jwt",token,{
        maxAge : 15 * 24 * 60 *1000,//miliseconds
        httpOnly : true, //prevent XSS attacks 
        sameSite : "strict", // prevent CSRF attacks cross-site request forgery attacks
    })
}
export default generateTokenAndSetCookie;