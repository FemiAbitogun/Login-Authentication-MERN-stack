// //SERVER
const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.listen(process.env.PORT, () => {
    console.log(`server lsitening at port ${process.env.PORT}`)
});

app.use(express.static('public'));
//DATABASE
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sensors', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

});
mongoose.connection.on('error', () => {
    console.error('error connecting to database')
});
mongoose.connection.once('open', () => {
    console.log('succesfully connected to database')
});

























