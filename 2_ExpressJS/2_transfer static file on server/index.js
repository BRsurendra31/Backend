const express = require('express'); // importimg express
const path = require('path');
const app = express();




// app.get('/file', (req, res)=>{
//     res.sendFile(path.join(__dirname,'BMICalculator','index.html'));
// })

// above method only sends the index.html file but not the contents linked with it like links , css,js, images  etc


// To transfer whole folder 

app.use(express.static('BMICalculator')); //express.static is a built-in middleware function in Express. It serves static files from the directory you specify. // now everything linked with index.html are showing


app.listen(3000,()=>{
    console.log("app is listening at port 3000...");
})