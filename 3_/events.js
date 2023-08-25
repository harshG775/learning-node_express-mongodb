"use strict"
const http = require("http")
const app = http.createServer()

app.on("request",(req,res)=>{
    console.log(req.url)
})
app.on("request",(req,res)=>{
    res.end("hello from server")
})
server.on("close",()=>{
    console.log("server closed")
})

const Port=5000
app.listen(Port,"127.0.0.1",()=>console.log(`server is running on ${Port}`))





// const EventEmitter = require("events")
/////////////
// class Sales extends EventEmitter {
//     constructor(){
//         super()
//     }
// }
/////////////
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


