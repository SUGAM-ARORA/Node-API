const express=require('express');
const mongoose = require('mongoose');
const app=express()
const Product = require('./models/productmodel');
app.use(express.json())



app.get('/'),(req,res)=>{
    res.send('Hello Node API')
}

app.get('/blog'),(req,res)=>{
    res.send('Hello BLog API')
}

app.get('/product'),async(req,res)=>{
  try{
    const products = await Product.find();
    res.status(200).json(products);
  }catch(error){ 
    res.status(500).json({message:error.message})
  }
}

app.get('/product/:id'),async(req,res)=>{
  try{
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({message:error.message})
  }
}


app.listen(3000,()=>{
    console.log('Node API is running on port 3000')
})

app.post('/product'),async(req,res)=>{
  try{
    const product = new Product(req.body);
    const result = await product.save();
    res.status(200).json(product);
  }catch(error){
    console.log(error);
    res.status(500).json({message:error.message})
  }
}

// update product
app.put('/product/:id'),async(req,res)=>{

  try{
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id,req.body,{new:true});
    if(!product){
      return res.status(404).json({message:'Product not found'})
      res.status(404).json({message:'Product not found'})
    }
  }catch(error){
    console.log(error);
    res.status(500).json({message:error.message})
  }
}


mongoose.connect('mongodb+srv://dbsugam:Db@1234@cluster0.tknup7l.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('Database Connected')
}).catch((error)=>{
    console.log('Error connecting to database')
})
