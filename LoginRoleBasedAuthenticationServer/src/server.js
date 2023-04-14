const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors({
    origin: ["http://localhost:3000", "https://7upreports-databasemanagement-system.netlify.app"],
    credentials: false,
    optionSuccessStatus: 200,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
}));



// app.use(cors({
//     // origin:"http://localhost:3000",
//     origin:["http://localhost:3000","https://7upreports-databasemanagement-system.netlify.app"],
//     credentials: true,
//     optionSuccessStatus:200,
//     methods:["GET","HEAD","PUT","PATCH","POST","DELETE"]
// }));


app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static("uploads"));


app.get('/', (req, res) => {
    res.send("ok.....")
});

const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}...`)
});


//DATABASE
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_CONFIG_PRODUCTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  
});
mongoose.connection.on('error', () => {
    console.error('error connecting to database')
});
mongoose.connection.once('open', () => {
    console.log('succesfully connected to database')
});


app.use('/registerNewUser', require('./api/user/post'));
app.use('/logIn', require('./api/user/post'));
app.use('/checkSignedIn', require('./api/user/post'));
app.use('/logOut', require('./api/user/post'));

app.use('/getLoggedInUser', require('./api/user/fetch'));


app.use('/newReport', require('./api/reportBreakDown/post'));
app.use('/getBreakDown', require('./api/reportBreakDown/fetch'));

app.use('/editreport', require('./api/reportBreakDown/editreport'));



















