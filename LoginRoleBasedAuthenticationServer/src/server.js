const express = require('express');
const cookieParser=require('cookie-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
    optionSuccessStatus:200,
}));


// app.use(cors({
//     origin:"https://femi-abitogun-coop-project.netlify.app", 
//     credentials:true,            
//     optionSuccessStatus:200,
//     methods:["GET","HEAD","PUT","PATCH","POST","DELETE"]
// }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static("uploads"));



// app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }));
const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
    console.log(`server lsitening at port ${PORT}...`)
});


//DATABASE
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_CONFIG_PRODUCTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
}, (err) => {err && console.log(err.message) });
mongoose.connection.on('error', () => {
    console.error('error connecting to database')
});
mongoose.connection.once('open', () => {
    console.log('succesfully connected to database')
});


app.use('/registerNewUser',require('./api/user/post'));
app.use('/logIn',require('./api/user/post'));
app.use('/checkSignedIn',require('./api/user/post'));
app.use('/logOut',require('./api/user/post'));

app.use('/getLoggedInUser',require('./api/user/fetch'));

app.use('/newReport',require('./api/reportBreakDown/post'));




















