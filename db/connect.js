const Mongoose = require("mongoose")

const connectDB = (url) =>{
    return Mongoose
     .connect (url, {
        useNewUrlParser:true,
      //  useCuseCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

}

module.exports = connectDB