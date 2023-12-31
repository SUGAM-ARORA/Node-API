const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
name : {
    type : String,
    required : [true, "Product name is required"]
    },
price : {
    type : Number,
    required : [true, "Product price is required"]
    },
    description : {
        type : String,
        required : [true, "Product description is required"]
        },
    image : {
        type : String,
        required : [true, "Product image is required"]
        }
      },
      {
        timestamps : true
      }
);

const Product=mongoose.model('Product',productSchema);

module.exports=Product;
