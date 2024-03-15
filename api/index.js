import express from 'express';
import colors from 'colors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.router.js';


dotenv.config()


mongoose.connect( process.env.MONGO)
.then(() => {
    console.log('mongodb is connected'.bgBlue);
})
.catch( (err) => {
    console.log(`error is this ${err}`.bgRed);
})

const app = express();

const PORT = 3000;
app.listen( PORT , ()=>{
    console.log(`server is running on port : ${PORT}`.bgMagenta);
})

// test api
app.use( '/api/user',  userRouter)