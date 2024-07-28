
const express = require('express');
const phone = require('./data');

const app = express();


/*
app.get('/api/v1/query', (req,res)=>{
    // console.log(req.query);
    let sortedPhone = [...phone];
    const {search, limit} = req.query;

    if(search){ // agar koi search par gaya h 

        sortedPhone = sortedPhone.filter((priduct)=>{
            return priduct.name.toLowerCase().startsWith(search);
        })

    }
    res.json(sortedPhone);
})


//op
http://localhost:3000/api/v1/query?search=a

[{"id":3,"name":"apple","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":5,"name":"asus","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000}]

*/


app.get('/api/v1/query', (req,res)=>{
    // console.log(req.query);
    let sortedPhones = [...phone];
    const {search, limit} = req.query;

    // Filter by search query if it exists
    if(search){ // agar koi search par gaya h 

        sortedPhones = sortedPhones.filter((product)=>{
           return product.name.toLowerCase().startsWith(search); // we can return this line instead of as it is writting
        });

    }

    // Limit the results if limit query exists
  if (limit) {
     sortedPhones = sortedPhones.slice(0, parseInt(limit));
  }


    res.json(sortedPhones);
})



app.listen(3000, ()=>{
    console.log(`Server is listening at port 3000...`)
})

//op
/*
http://localhost:3000/api/v1/query?search=a&limit=1

[{"id":3,"name":"apple","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000}]

*/

/*
http://localhost:3000/api/v1/query?search=a&limit=2

[{"id":3,"name":"apple","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000},{"id":5,"name":"asus","image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fglobal%2Fproduct-list%2Fredmi%2F&psig=AOvVaw1LCsmX22ckpNgpSr6JdI-F&ust=1721478594813000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCb79KNs4cDFQAAAAAdAAAAABAE","price":3000}]

*/

