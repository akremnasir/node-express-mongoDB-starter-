const express = require('express')
const {getAll, getOne, createOne, updateOne, deleteOne} = require('../controller/main')

const router = express.Router()

// use patch insted of put if the update is partial
router.route('/').get(getAll).post(getOne)
router.route('/blabla').post(createOne).put(updateOne).delete(deleteOne)

module.exports = router