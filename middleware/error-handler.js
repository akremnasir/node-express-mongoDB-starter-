

const errorHandlerMiddleware = (err,req,res,next) =>{
    console.log(err)
    return res.status(500).send('opps! something went wrong')
}

module.exports = errorHandlerMiddleware