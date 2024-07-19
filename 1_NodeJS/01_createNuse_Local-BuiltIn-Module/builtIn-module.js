
// os 

const os = require('os');
const a = os.freemem(); // checking free memory
const b = os.totalmem();
const c = os.userInfo(); //,follo docs nodejs.org/api/os.html
console.log(a,b,c);

// op 
/*
6068670464 16869548032 {
    uid: -1,
    gid: -1,
    username: 'acer',
    homedir: 'C:\\Users\\acer',
    shell: null
  }
*/

// path

const path = require('path');
console.log(__filename); //C:\Users\acer\Development\Backend\nodejs\01_createNuse_Local-BuiltIn-Module\builtIn-module.js
console.log(__dirname);//C:\Users\acer\Development\Backend\nodejs\01_createNuse_Local-BuiltIn-ModulebuiltIn-module.js
console.log(path.basename(__filename));//builtIn-module.js
console.log(path.basename(__dirname));//01_createNuse_Local-BuiltIn-Module
console.log(path.extname(__filename)); // .js


console.log(path.join('/hello', 'filetext', 'indextjs')); //\hello\filetext\indextjs


//  fs - file system

const fs = require('fs');
fs.readFile('module.txt', 'utf-8', (err, data)=>{  //fs.readFile - it is async way // fs.readFileSync - this would be async way
    if(err){
        console.log(err);
        return;
    }

    console.log(data);
})

// # There are 2 type node module

// 1. Built in Module - we only use
// 2. Local Module -  we create and use


// write new file

fs.writeFile('newfile.txt','This file will be created automatically', (err)=>{
    if(err){
        console.log(err)
        return
    }

    console.log("file written successfully...")
})

//file written successfully...


// we can use mathings from docs 