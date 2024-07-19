const express = require('express');
const phone = require('./data');

const app = express();


app.get('/', (req,res)=>{

    res.json([{

        fname: 'surendra',
        lname: 'Kumar'
    },

    {

        fname: 'raj',
        lname: 'Kumar'
    },
    {

        fname: 'piyush',
        lname: 'Kumar'
    }

])
})

app.listen(3000, ()=>{
    console.log("app is listening at port 3000 ....");
})




// op 
/*
[{"fname":"surendra","lname":"Kumar"},{"fname":"raj","lname":"Kumar"},{"fname":"piyush","lname":"Kumar"}]

*/ // this is the good example of a basic API
// we can us e it anywhere


// by importing module 

app.get('/phone', (req, res)=>{

    res.json(phone);
})



//op

/*
{"phone":[{"id":1,"name":"redmi","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":2,"name":"oppo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":3,"name":"apple","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":3,"name":"vivo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":4,"name":"asus","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000}]}

*/



// realcase example 

app.get('/detail', (req,res)=>{
    res.send('<h1>About API </h1><a href="/api/phone"> API </a>');
})

app.get('/api/phone', (req,res)=>{

    res.send(phone);
})



//op

/*
http://localhost:3000/detail > http://localhost:3000/api/phone


{"phone":[{"id":1,"name":"redmi","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":2,"name":"oppo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":3,"name":"apple","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":3,"name":"vivo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":4,"name":"asus","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000}]}

*/


app.get('/item', (req,res)=>{

    const newItem = phone.map((product)=>{
        const {id, name, image} = product; // destructure id , name image from phone 

        return {id, name , image};
    })

    res.json(newItem);
})


// op

/*
[{"id":1,"name":"redmi","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE"},{"id":2,"name":"oppo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE"},{"id":3,"name":"apple","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE"},{"id":3,"name":"vivo","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE"},{"id":4,"name":"asus","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE"}]

*/