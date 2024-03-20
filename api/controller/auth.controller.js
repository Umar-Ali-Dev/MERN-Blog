import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
     

    const {username , email, password } = req.body;

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
        password : hashedPassword,
        profilePicture : null,
        userToken : null
    })


    try {
        const result = await newUser.save();
        res.status(201).json({message:"sign up done"})
    } catch (error) {
         next(error)
    }
  
    
}

export const signin = async (req, res, next) => {
    const {email , password} = req.body
    if( !email || !password || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required'))
    }

    try {
        const validUser = await User.findOne({email})
        if(!validUser){
            return next(errorHandler(404,"User not found"))
        }
        const validPassword = bcryptjs.compareSync(password , validUser.password)
        if(!validPassword){
           return  next(errorHandler(400, "Invalid Password"))
        }

        const token = jwt.sign({id : validUser._id, isAdmin : validUser.isAdmin},process.env.JWT_SECRET )

        // different approach start 

        // const newUser = new User({
        //     username,
        //     email,
        //     password : hashedPassword,
        //     profilePicture : null,
        //     userToken : token
        // })

        // const result = await newUser.save();

        // res.status(200).json(newUser)

        // end 


        // const {password : pass , ...rest} = validUser._doc

                // Sending the token in the response body
                // res.status(200).json( {
                //     success: true,
                //     message: "logged in successfully",
                //     validUser,
                //     token
                // });

                // res.status(200).cookie('access_token', token).json(validUser)

        res.status(200).cookie('access_token', token, {
            httpOnly : true }).json(validUser)
    } catch (error) {
        next(error)
    }
}