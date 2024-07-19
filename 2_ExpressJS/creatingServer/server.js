const express = require('express'); // importimg express

const app = express();

/*
app.get('/', (req, res)=>{
    res.send('<h1>This is showing because you are at home location i.e you are indirectly requesting by comming heren for loking somethin at home..actually</h1>')
})
// similarlly we can set different routes 
app.get('/about', (req, res)=>{
    res.send('This is about route')
})

app.get('/contact', (req, res)=>{
    res.send('This is contact route')
})
*/


// if i want to send any file like html file 

const path = require('path');
app.get('/file', (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.listen(3000,()=>{
    console.log("app is listening at port 3000...");
})