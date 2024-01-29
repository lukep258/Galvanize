import express from 'express';
import expressWs from "express-ws";
import dotenv from 'dotenv';

dotenv.config()
const app = express();
const PORT = process.env.PORT

expressWs(app);

// Socket Events
app.ws('/',(ws,req)=>{
    console.log('Client connected')
})

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))