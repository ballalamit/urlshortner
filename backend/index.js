const express = require('express');
require('dotenv').config()
var cors = require('cors')  

const connection = require('./db')
const loginRouter = require('./Routes/LoginRoute');
const signupRouter = require('./Routes/SignupRoute');
const UrlGenerator = require('./Routes/Url')

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) =>{
    res.send("welcome to homepage")
})

app.use('/', loginRouter);
app.use('/', signupRouter)
app.use('/', UrlGenerator)



const port= process.env.PORT || 8001

app.listen(port,async ()=>{
    try {
        console.log(`listening on ${port}`) 
        await connection
        console.log(`db is working`)
    } catch (error) {
        console.log(`error: ${error}`)
    }

});