const mongoose = require('mongoose');

const dburl = "mongodb+srv://employ:employ@proj2.fzzyq.mongodb.net/Prac-Bcrypt";

mongoose.connect(dburl)
.then(()=>{
    console.log("connection suceeced");
})
.catch((err)=>{
    console.log("connection disconnected",err);
})