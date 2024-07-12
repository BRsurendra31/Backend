// using local module "add"

const addFn=require("./add"); 
const sum = addFn(3,5); // add module exported from add as function , we will use it as addFn(3,5)
console.log(sum)

console.log("we are using local module here....")

// in terminal run command - node index.js 
// o/p 

// 8
// we are using local module here....