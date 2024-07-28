

const express = require('express');
const phone = require('./data');

const app = express();



app.get('/item', (req,res)=>{
    res.json(phone); // phone is imported at top as data 
})



// op
/*
[{"id":1,"name":"redmi","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":2,"name":"oppo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":3,"name":"apple","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":3,"name":"vivo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":4,"name":"asus","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000}]
*/


// If i want single data from particular id - We need param concept

// for id = 1
// app.get('/item/:phoneID', (req,res)=>{
//     console.log(req.params);
//     const newItem = phone.find((product) => product.id ===1);
//     res.json(newItem); // phone is imported at top as data 
// })

// op 
    //  we can see request in console 
    //Server is Listening at 30000...
    //{ phoneID: '1' } 

    // on localhost  - by request http://localhost:3000/item/1 in search bar :
    //{"id":1,"name":"redmi","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000}


/*
// Best ways : for any ids 

app.get('/item/:phoneID', (req, res) => {
    console.log(req.params);
    const {phoneID} = req.params; // Convert phoneID to a number
    const singleItem = phone.find((product) => product.id === Number(phoneID));
    
    res.send(singleItem); // phone is imported at top as data
});

app.listen(3000,()=>{

    console.log("Server is Listening at 30000...");
})

*/

//op

/*
http://localhost:3000/item/2 - req

{"id":2,"name":"oppo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000}  // res



http://localhost:3000/item/4 - req
{"id":4,"name":"vivo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000} // res

*/

// In real world scenario 

app.get('/item/:phoneID', (req, res) => {
    console.log(req.params);
    const {phoneID} = req.params; // Convert phoneID to a number
    const singleItem = phone.find((product) => product.id === Number(phoneID));

    if(!singleItem){ // if single item i.e product for particular product is  not availabe

        return res.status(404).send("Product not found ....")
    }
    res.send(singleItem); // phone is imported at top as data
});

app.listen(3000,()=>{

    console.log("Server is Listening at 30000...");
})


// op
/*
http://localhost:3000/item/1

{"id":1,"name":"redmi","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000}

http://localhost:3000/item/10

Product not found ....

*/