const express = require('express')
require('dotenv').config()
const {graphqlHTTP} = require('express-graphql')
const colors = require('colors')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
connectDB()


app.use('/graphql' , graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.get('/' , (req,res) => {
    res.send('Hello world')
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})