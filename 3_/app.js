/*video 32 completing */
////////////////////////////////////////////////////////////////
"use strict"
const fs = require("fs")
const crypto = require("crypto")

const start = Date.now()
// process.env.UV_THREADPOOL_SIZE = 2;


setTimeout(()=>console.log("timer 1 finished"),0);
setImmediate(()=>console.log("Immediate 1 finished"))

fs.readFile("./text/text.txt", "utf-8", (error ,data)=>{
    console.log("I/O Finished");
    console.log("______________");

    setTimeout(()=>console.log("timer 2 finished"),0);
    setTimeout(()=>console.log("timer 3 finished"),3000);
    setImmediate(()=>console.log("Immediate 2 finished"))
    process.nextTick(()=>console.log("next tick"))


    crypto.pbkdf2Sync("harsh775","salt",100000,1024,"sha512")
    console.log(Date.now()-start,": pbkdf2 finished")

    crypto.pbkdf2Sync("harsh775","salt",100000,1024,"sha512")
    console.log(Date.now()-start,": pbkdf2 finished")

    crypto.pbkdf2Sync("harsh775","salt",100000,1024,"sha512")
    console.log(Date.now()-start,": pbkdf2 finished")
    
    crypto.pbkdf2Sync("harsh775","salt",100000,1024,"sha512")
    console.log(Date.now()-start,": pbkdf2 finished")
})

console.log("hello from to top level code");

////////////////////////////////////////////////////////////////