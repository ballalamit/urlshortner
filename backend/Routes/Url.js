const express = require('express');
const UrlGenerator = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var randomstring = require("randomstring");

const urlModel = require('../Models/urls.model');


UrlGenerator.post('/create', async (req, res) => {
    const {title, original_Url} = req.body;
    try {
        const randomString = randomstring.generate(9);

        const newurl= new urlModel({
            title,
            original_Url,
            shorted_Url:randomString
        })
        
        newurl.save();
        res.send("url saved successfully")
        
    } catch (error) {
        console.log(error);
    }

});

UrlGenerator.get('/url', async (req, res) => {
    try {
        let url = await urlModel.find({});
        res.send({url});
    } catch (error) {
        console.log(error); 
    }
});

UrlGenerator.get('/url/:shorturl', async (req, res) => {
    const {shorturl} = req.params;
    try {
        let url = await urlModel.findOne({shorted_Url: shorturl});
        if (url) {
            const fullUrl = url.original_Url;
            url.visit_Count++;

            await url.save(); 
            res.send({fullUrl})
        } else {
            res.status(404).send({message: "URL not found"});
        }  

    } catch (error) {
        console.log(error); 
    }
});



module.exports = UrlGenerator;