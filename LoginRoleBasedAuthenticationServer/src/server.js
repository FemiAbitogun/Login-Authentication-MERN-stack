const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors({
    origin: "*",
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const PORT = process.env.PORT || 5678
app.listen(PORT, () => {
    console.log(`server lsitening at port ${PORT}...`)
});



//DATABASE
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_CONFIG_PRODUCTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {err && console.log(err.message) });
mongoose.connection.on('error', () => {
    console.error('error connecting to database')
});
mongoose.connection.once('open', () => {
    console.log('succesfully connected to database')
});

























