// remove any DeprecationWarning
const process= require('process');
process.removeAllListeners('warning');

// connect to the db
const connectDB = require('./db/connect')

// add express async error to throw errors when nessecery
require('express-async-errors')

// express
const express = require('express')
const app = express()

// configuere the dotenv to store and access essential informations
require('dotenv').config()

// adding the middlewares
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/error-handler')

// routers
const mainRouter = require('./router/main')


// using middleware
app.use(express.json())
app.use('/api/v1',mainRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)

// connecting to the db and listening the port
const port = process.env.PORT || 3000
const start = async () =>{
    try {
       await connectDB(process.env.MONGO_URI)
       app.listen(port,()=>{
        console.log(`listening on port ${port}...`)
       })
    } catch (error) {
        console.log(error)   
    }
}
start()

