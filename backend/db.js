const mongoose = require('mongoose');
require('dotenv').config()

const monogoURL = process.env.MONGO_URL
const connection = mongoose.connect(monogoURL)


module.exports = connection