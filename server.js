const express = require('express')
const app = express()
const bodyparser=require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const data_router = require('./routers/Crud_Router')
const cors= require('cors')
dotenv.config();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors({
    origin: '*'
}));
app.use(data_router)


mongoose.connect(process.env.DATABASE_STRING,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(()=>{
    console.log('database is connected to the server')
}).catch((err)=>{
    console.log('database was not connected and try again')
})



app.listen(process.env.PORT,()=>{
    console.log(`server is running on the http://localhost:${process.env.PORT}`)
})


