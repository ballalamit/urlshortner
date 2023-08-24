const express = require('express');
const loginRouter = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const userModel = require('../Models/users.model')


loginRouter.post('/login', async (req, res) => {
    try {
        const {email, password} =req.body;
   
        const user = await userModel.findOne({email});

        if(user){
            bcrypt.compare(password, user.password, function(err, response) {
                if(response){
                  
                    let token = jwt.sign({ user_Id: user.id }, 'amitsecret');
                    res.send({message: "logged in successfully", token})
                }
                else{
                    res.send("login failed")
                }
            });
        }
        else{
            res.send("user not found")
        }


    } catch (error) {
        res.send(error);
    }
})

module.exports = loginRouter