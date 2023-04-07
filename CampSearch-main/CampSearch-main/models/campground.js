const mongoose = require('mongoose');                               //05
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title:String,
    image:String,
    price:Number,
    description:String,
    location:String,
    reviews:[
        {
            type: schema.type.objectId,
            ref:'Review'
        }
    ]
});

CampgroundSchema.post('findOneAndDElete',async function(doc){
    if(doc){
        await Review.deleteMany ({
            _id:{
                $in doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema);