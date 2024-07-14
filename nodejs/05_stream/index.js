
// old way to read file

const fs = require('fs');
const http = require('http');

// creating server

/*
const server = http.createServer((req, res)=>{

    if(req.url !== "/"){ // if not eqal to home

        return res.end();
    }

    const file = fs.readFileSync('file.txt');
    return res.end(file); // res.end() method used to end the res and send data to the client
})

// listen server at port X

server.listen(3000, ()=>{
    console.log("server listening at port 3000....")
})

//server listening at port 3000....
// whole text file showing at localhost : 3000

*/


// new way 

/*
const server = http.createServer((req, res)=>{

    if(req.url !== "/"){ // if not eqal to home

        return res.end();
    }

    // const file = fs.readFileSync('file.txt');
    // return res.end(file);

    const readableStream = fs.createReadStream('file.txt'); // we are reading i.e we create read stream from file.txt
    readableStream.on('data', (chunk)=>{ // yaha ek data treager hoga jise hum chuncks me write kara denge as response
        res.write(chunk);
    });
    // end the res
    readableStream.on('end',()=>{
        res.end();
    });

    readableStream.on('err', (err)=>{
        console.log(err);
        res.statusCode =500;
        res.end('Internal Error');

    })




})

// listen server at port X

server.listen(3000, ()=>{
    console.log("server listening at port 3000....")
})


// //server listening at port 3000....
// whole text file showing chunk wise at localhost : 3000 - actually this file is not so big thats why it is not showing chunkwise , othewise it will

*/

// in short code using pipe()

const server = http.createServer((req, res)=>{

    if(req.url !== "/"){ // if not eqal to home

        return res.end();
    }
    const readableStream = fs.createReadStream('file.txt');
    readableStream.pipe(res);




})

// listen server at port X

server.listen(3000, ()=>{
    console.log("server listening at port 3000....")
})

//server listening at port 3000....
// whole text file showing chunk wise at localhost : 3000 - actually this file is not so big thats why it is not showing chunkwise , othewise it will
