const mongoose = require('mongoose');
require('dotenv').config();

const dburl = process.env.DBURL;

mongoose.connect(dburl)
.then(()=>{
    console.log("connection suceeced");
})
.catch((err)=>{
    console.log("connection disconnected",err);
})