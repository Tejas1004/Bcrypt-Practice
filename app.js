const express = require('express');
const app=express();
require('./config/mongo');
const port = process.env.PORT || 3000;
const register = require("./routes/registerRoute");
app.use(express.json());

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})

app.use('/register',register);