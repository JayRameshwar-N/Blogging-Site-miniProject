const bodyParser = require('body-parser')
const express= require('express')
const mongoose = require('mongoose')
const route=require('./route/route')

const app=express()
app.use(bodyParser.json())


mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://RameshwarJay:RUlNC8QtlA8A91jX@rameshwarnavathar.dujri1m.mongodb.net/")
.then(()=> console.log("MongoDB connected! **"))
.catch((error)=> console.log(error))


app.use('/',route)


app.listen(4000,function (){
   console.log("Port connected to ! ",+3000)
})  