import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
     

    const {username , email, password} = req.body;

    if(username === '' || email === '' || password === '' || !username || !email || !password){
        next(errorHandler(400,'All fields are required'))
    }

     // Check if the username or email already exists in the database
     const existingUser = await User.findOne({ $or: [{ username }, { email }] });

     if (existingUser) {
         return next(errorHandler(409, 'Username or email already exists'));
     }

    const hashedPassword = bcryptjs.hashSync(password , 10)

    const newUser = new User({
        username,
        email,
        password : hashedPassword
    })


    try {
        const result = await newUser.save();
        res.status(201).json({message:"sign up done"})
    } catch (error) {
         next(error)
    }
  
    
}