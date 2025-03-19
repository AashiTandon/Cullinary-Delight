const express = require('express');
const MenuItem = require('../models/MenuItem');
const verifyOwner = require('../middlewares/auth-middleware')

const router = express.Router();

router.route('/')
.get(async (req,res)=> {
    try{
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    }
    catch(error){
        console.log(error);;
    }
})


router.post('/',verifyOwner, async(req,res)=> {
    try{
        const newItem = new MenuItem(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;