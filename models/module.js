const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    ratings : {
        type : String,
        required : true
    },
    summary : {
        type : String,
        required : true
    },
    releaseDate : {
        type : String,
        required : true
    },
    updatedDate : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('movies', moviesSchema);