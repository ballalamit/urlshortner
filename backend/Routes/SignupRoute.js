const express = require('express');
const signupRouter = express.Router();
var bcrypt = require('bcryptjs');

const userModel = require('../Models/users.model')


signupRouter.post('/signup', async (req, res) => {
    try {
        const {username, email, password} =req.body;
   
        console.log(username, email, password);
        const user = await userModel.findOne({ email});

        if(!user){
            const hashedpassword = await bcrypt.hash(password, 10);
            let newUser = new userModel({
                username,
                email,
                password: hashedpassword
            })
            newUser.save();
            res.send({message: 'User saved'})
            // res.send('User saved')
        }
        else{
            res.send({message: 'User already exists'})
        }


    } catch (error) {
        res.status(500).send({ error: 'An error occurred' });
    }
})

module.exports = signupRouter