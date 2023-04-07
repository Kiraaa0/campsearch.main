const mongoose =require('mongoose');
const schema=mongoose.schema;

const reviewSchema =new schema({
    body:String,
    rating:Number
});

module.exports=mongoose.model("Review",reviewSchema)