"use strict"
const EventEmitter = require("events")
const http = require("http")

// class Sales extends EventEmitter {
//     constructor(){
//         super()
//     }
// }
// const myEmitter = new Sales();

// myEmitter.on("newSale",()=>{
//     console.log("new sale")
// })
// myEmitter.on("newSale",()=>{
//     console.log("new new sale")
// })
// myEmitter.on("newSale",(stock)=>{
//     console.log(`sale stock : ${stock} `)
// })

// myEmitter.emit("newSale",10)

//////////////////////////////
const server = http.createServer()

server.on("request",(req,res)=>{
    // console.log(req.url)
    res.end("request received")
})
server.on("request",(req,res)=>{
    // console.log(req.url)
    console.log("request received")
})
server.on("close",()=>{
    console.log("server closed")
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("server started")
})


