
const mongoose = require('mongoose')

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Connected DB'.bgYellow)
        })
        .catch((error) => {
            console.log('Error'.red)
        })
}

module.exports = connectDB