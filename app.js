const express = require('express')
const mongoose = require('mongoose')

const { MONGO_URI } = require('./config.js')

const app = express()

mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=> {
    console.log('Database Connected!')
}).catch(err => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})