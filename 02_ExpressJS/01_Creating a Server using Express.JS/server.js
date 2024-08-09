const express = require("express") // requires express to use its power in my application 
const app = express(); // calling a func with empty arg. , all the values will be passed to app variable 
 
app.get("/", (req, res) =>{ // Defining root i.e on which page user want to visit and action (func) that you want to show after visiting that particular page ("/")
    res.status(200).send("welcome to 1st server created by Mr surendra "); // 200 - success

});


// abive response hum kaha dekhenge ? 
// definitely on any port 
// so server have to at particolar port
const PORT = 5000; 
app.listen(PORT, ()=> { // on which port want to listen the server, with a conformation response that server is listening 
console.log(`server is running at port ${PORT}`);
});


// if i want to create one more root

app.get("/register", (req, res) =>{ // Defining root i.e on which page user want to visit and action (func) that you want to show after visiting that particular page ("/")
    res.status(200).send("welcome to registartion page "); // 200 - success

});

// // output on port

// http://localhost:5000/
// welcome to 1st server created by Mr surendra

// http://localhost:5000/register
// welcome to registartion page


// problem :

// wen we change anything like want to create one more root in this case 
// we have to start server again to se the response of current root 


// // Solution :
//      -use nodemon package (simly copy "npm install -g nodemon" from nodemon website , install it in directory )
//      - now whatever you change will reflect live no need to start serve again and again