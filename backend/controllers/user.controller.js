import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import validator from "validator"


// create token 
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register User 
const registerUser = async (req,res) => {
    const {name,email,password} = req.body;
    try {
        // checking is user already exists
        const existUser = await userModel.findOne({email})
        if (existUser) {
            return res.json({success:false,message: "User aleary exists by this email"})
        }

        // validating  email and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }

        // for stong password
        if(password.length < 8) {
            return res.json({success:false,message:"Please Enter a strong password "})
        }

        // hasing user password
        
        const hashedPassword = await bcrypt.hash(password,10)

        // for new user  
        const newUser =  await userModel.create({
            name,
            email,
            password:hashedPassword,
        })

        const token = createToken(newUser._id)
        res.json({success:true,message:"Account created",token})

    } catch (error) {
        console.log("error!",error);
        return res.json({success:false,message:"error"})    
    }
}

// login User 
const loginUser = async (req,res) => {
 
    const {email,password} = req.body;
    try {
        // checking is user exists
        const user = await userModel.findOne({email})

        if (!user){
            return res.json({success:false,message: "User not found by this email"})
        }

        const isPasswordValid = await bcrypt.compare(password,user.password)
        // if password is not valid
        if (!isPasswordValid) {
            return res.json({success:false,message: "Invalid password"})
        }
        // if password is valid
        const token = createToken(user._id)
        res.json({success:true,message:"Login successfully",token})
    }
    // if any error occurs
    catch(error) {
        console.log("error!",error);
        return res.json({success:false,message:"error"})    
    }
}

export {registerUser, loginUser}