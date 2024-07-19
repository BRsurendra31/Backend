// synchronous 


// function fun1(){
//     console.log("I am fun1");
// }
// function fun2(){
//     console.log("I am fun2");
// }
// function fun3(){
//     console.log("I am fun3");
// }

// fun1();
// fun2();
// fun3(); 

// o/p :

// I am fun1
// I am fun2
// I am fun3


// function fun3(){ // no mattrs the code sequence , only calling sequence mattrs 
//     console.log("I am fun3"); 
// }

// function fun1(){
//     console.log("I am fun1");
// }
// function fun2(){
//     console.log("I am fun2");
// }

// fun1();
// fun2();
// fun3(); // no mattrs the code sequence , only calling sequence mattrs 

// op:
// I am fun1
// I am fun2
// I am fun3


// make asynchronous 


// function fun1(){
//     //    setTimeout(()=>console.log("I am fun1"),200) // even we set it to 0 but still it will be execute after synchronous codes 

//     setTimeout(()=>console.log("I am fun1"),0)

//     }
//     function fun2(){
//         console.log("I am fun2");
//     }
//     function fun3(){
//         console.log("I am fun3");
//     }
    
//     fun1();
//     fun2();
//     fun3(); 

    //op :
//     I am fun2
// I am fun3
// I am fun1

// using process.nextTick - an asynchronous func

// function fun1(){

//     process.nextTick(()=>console.log("im process1"));
//     setTimeout(()=>console.log("I am fun1"),0)
//     }
//     function fun2(){
//         console.log("I am fun2");
//     }
//     function fun3(){
//         console.log("I am fun3");
//     }
    
//     fun1();
//     fun2();
//     fun3(); 

    //op:

//     I am fun2
// I am fun3
// im process1
// I am fun1

function fun1(){
    setTimeout(()=>console.log("I am fun1"),0)
    process.nextTick(()=>console.log("im process1")); // this will execute first then setTimeout
    
    }
    function fun2(){
        console.log("I am fun2");
    }
    function fun3(){
        console.log("I am fun3");
    }
    
    fun1();
    fun2();
    fun3(); 

    // op :
//     I am fun2
// I am fun3
// im process1
// I am fun1
