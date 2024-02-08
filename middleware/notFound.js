const notFound = (req,res,next)=>{
    res.status(404).send('route dose not exist');
}

module.exports = notFound