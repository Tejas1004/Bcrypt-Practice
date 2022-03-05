const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User } = require('../models/datavalid');

router.post('/',async (req,res)=>{
      
    let user = new User(req.body);
    //Convert password into Hash
    user.password = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10),null);
    // user.confirmpassword = bcrypt.hashSync(req.body.confirmpassword.genSaltSync(10),null);
    const token = await user.genrateAuthToken();
    
    user.save()
    .then(()=>{
        res.status(201).send("Data Registered");
    })
    .catch((err)=>{
        res.status(401).send("Sorry! Data not registered");
    })
})
module.exports = router;