import express from 'express'
import cors from 'cors'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const app=express()
const connectionString=process.env.DATABASE_URL
const pool=new pg.Pool({connectionString})
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const init=()=>{
    // pool.query(`select * from player`)
    // .then(result=>console.log(result.rows))

    app.listen(process.env.port,()=>{console.log(`listening on ${process.env.port}`)})
}


init()