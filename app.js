const express = require('express');
const app=express();
const jwt = require('jsonwebtoken');
require('./config/mongo');
const port = process.env.PORT || 3000;
const register = require("./routes/registerRoute");
app.use(express.json());


// const createToken = async() => {
//       const token = jwt.sign({_id:"6220fac65583acd5f1e5b532"}, "mynameistejasdnyaneshwarzanzane")
//       console.log(token);
//       const tokenVerify = jwt.verify(token,"mynameistejasdnyaneshwarzanzane");
//       console.log(tokenVerify);
// }
// createToken();
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})

app.use('/register',register);