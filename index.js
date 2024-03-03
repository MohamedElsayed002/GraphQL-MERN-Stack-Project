const express = require('express')
require('dotenv').config()
const {graphqlHTTP} = require('express-graphql')
const colors = require('colors')
const morgan = require('morgan')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
connectDB()

app.use(express.static(path.resolve(__dirname , './public')))



app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();}
)

app.use('/graphql' , graphqlHTTP({
    schema,
    graphiql : true
}))
// app.get('/' , (req,res) => {
//     res.send('Hello world')
// })


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})