const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const res = require('express/lib/response');
const data = new mongoose.Schema({
    firstname: { type:String , required:true },
    lastname: { type:String , required:true },
    email : { type:String , unique:true,  required:true },
    gender: { type:String , required:true },
    phone : {type:Number,required:true,unique:true },
    age: { type:Number,required:true },
    password: { type:String,required:true },
    tokens:[{token:{ type:String,required:true }}] 

})
//jwt auth token
data.methods.genrateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()}, "mynameistejasdnyaneshwarzanzane");
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    } catch (error) {
        res.send("something error happened",error);
        console.log(error);
    }
}

const User = new mongoose.model('PracticeBcrypt',data);
module.exports = {User};