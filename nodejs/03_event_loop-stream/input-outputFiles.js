// Different Asynch funcs :

// setTimeout
setTimeout(()=>{ 
    console.log("I am setTimeout")
},0)
//1 I/O files 
const fs = require('fs');

fs.readFile(__filename, ()=>{

    console.log("I am file")
})


//3 Promise func

Promise.resolve().then(()=>{// microtask callbacks
    console.log("I am promise")
})
//2 process func

process.nextTick(()=>{ // microtasks callbacks
    console.log(" I am process")
})



// op:

// I am process
// I am promise
// I am file
// I am setTimeout - if time=200


// I am process
// I am promise
// I am setTimeout - if time=0
// I am file



// microtask callbacks execute first