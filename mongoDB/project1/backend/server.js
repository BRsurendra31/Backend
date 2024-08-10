const express = require('express');
const app = express();
const connectDB = require('./db/dbConnection')
const User = require('./db/user')

const port = 8000;


// middleware for parsing 

app.use(express.json())


// registration

app.post('/register', async(req, res)=>{

    try{
        const {username, password} = req.body;
        console.log(req.body);
        const user = new User({username, password});
        await user.save();
        res.status(201).json({message : 'Registration success..'})

    }
    catch(error){
        res.status(500).json({error :'Registration fail..'});
    }
})


connectDB();
app.listen(port, ()=>{

    console.log(`app is listening on port ${port}.....`)
})