import express from 'express';
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import dbConnection from './db/connection.js';
import bookRoutes from './routes/book.route.js';
import cors from 'cors'
import userRouter from './routes/user.route.js';
const app=express();

dotenv.config()
let PORT=process.env.PORT || 5090
let DBNAME=process.env.DBNAME
let DBURL=process.env.DBURL
dbConnection(DBURL,DBNAME)

app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
app.use('/',bookRoutes)
app.use('/user',userRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
 
});