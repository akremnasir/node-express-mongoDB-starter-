const mongoose = require('mongoose')

const mainSchema = mongoose.Schema({
    name:{  //validations
    type:String,
    required:[true,'must provide name'],
    trim:true,
    maxlength:[20,'name can not be more rhan 20 caracters']
},
completed:{//validations
    type:Boolean,
    default:false
}})
module.exports = mongoose.model('mainSchema', mainSchema)