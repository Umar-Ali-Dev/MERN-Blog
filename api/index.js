import express from 'express'
import colors from 'colors'
const app = express();

const PORT = 3000;
app.listen( PORT , ()=>{
    console.log(`server is running on port : ${PORT}`.bgMagenta);
})