const router = require('express').Router();
const User = require('../models/User');
// to create something new
//encrypting password
const bcrypt = require('bcrypt');

//Register
router.post('/register', async(req,res) =>{

    try{
        // initilization of bcrypt
        const salt = await bcrypt.genSalt(10)
        // assigning hash function to a property password
        const hashedPass = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})
// LOGIN

router.post('/login',async(req,res)=>{
    try{
        // for expaination see the notes after mongodb in notebook
        const user = await User.findOne({
            username:req.body.username});
            !user && res.status(400).json("Wrong Credentials!");

            const validated = await bcrypt.compare(req.body.password,user.password)
            !validated && res.status(400).json("Wrong Credentials!")

            const {password, ...otherProperties} = user._doc;
            res.status(200).json(otherProperties);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports=router