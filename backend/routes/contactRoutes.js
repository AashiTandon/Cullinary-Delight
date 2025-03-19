const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        const {name,email,subject,message} = req.body;

        if(!name || !email || !subject || !message){
            return res.status(400).json({message: "All fields are required"});
        }

        const newContact = new Contact({name,email,subject,message});
        await newContact.save();

        res.status(201).json({message:"Message sent successfully"});
    }
    catch(error){
        console.log(error);
    }
})

module.exports = router;