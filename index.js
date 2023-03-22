const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
// const dotenv =  require('dotenv')
// dotenv.config()
const app = express()
const PORT = process.env.port || 5000



app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello harry')
})

app.use('/api',require('./routes/submit'))

app.listen(PORT, () => {
    // console.log(`Example app listening at ${PORT}`)
})