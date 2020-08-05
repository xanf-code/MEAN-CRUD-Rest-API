const express = require('express');
const mongoose = require('mongoose');

const { MONGO_URI } = require('./config.js');

const movieRoutes = require('./routes/api/movies');

const app = express();

// to tackle undefined error
app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=> {
    console.log('Database Connected!')
}).catch(err => console.log(err))

app.use('/api/v1/movies',movieRoutes);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})