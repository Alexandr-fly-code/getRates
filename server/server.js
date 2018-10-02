const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('../routes/user_routes');

const config = require('../config/config');
const DB = config.MongoUrl;
const PORT = config.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: '*'}));

app.use('/user', userRouter);

mongoose.Promise = global.Promise;
mongoose.connect(DB, {useNewUrlParser: true})
    .then(()=> console.log('Database is connected'))
    .catch(err => console.log( `Can't connect to the database ${err}`));

app.listen(PORT, function() {
    console.log(`This server is running on port: ${PORT}`)
})

module.exports = app;