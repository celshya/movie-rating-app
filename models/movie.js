const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    genre:{
        type:String,

    },
    releaseYear:{
        type:Date
    },
    description:{
        type:String
    },
    
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
},{timestamps:true})


const Movie = mongoose.model("Movie",movieSchema)

module.exports = Movie;