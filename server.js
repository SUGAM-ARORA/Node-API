const express=require('express');
const mongoose = require('mongoose');
const app=express()

app.get('/'),(req,res)=>{
    res.send('Hello Node API')
}

app.get('/blog'),(req,res)=>{
    res.send('Hello BLog API')
}

app.listen(3000,()=>{
    console.log('Node API is running on port 3000')
})

mongoose.connect('mongodb+srv://dbsugam:Db@1234@cluster0.tknup7l.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('Database Connected')
}).catch((error)=>{
    console.log('Error connecting to database')
})
