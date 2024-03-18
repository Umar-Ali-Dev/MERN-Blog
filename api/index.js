import express from 'express';
import colors from 'colors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.router.js';
import authRoute from './routes/auth.route.js'

dotenv.config()


// mongoose.connect( process.env.MONGO)
mongoose.connect('mongodb://127.0.0.1:27017/blog1' )
.then(() => {
    console.log('mongodb is connected'.bgBlue);
})
.catch( (err) => {
    console.log(`error is this ${err}`.bgRed);
})

const app = express();

// allowing input into json 
app.use(express.json()); 

const PORT = 7000;
app.listen( PORT , ()=>{
    console.log(`server is running on port : ${PORT}`.bgMagenta);
})

// test api
app.use( '/api/user',  userRouter)

// sign up api  
app.use( '/api/user' , authRoute)