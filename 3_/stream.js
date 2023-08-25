const fs = require("fs");
const server = require("http").createServer() 


server.on("request",(req,res)=>{
    /* solution 1 */
    // fs.readFile("./text/text.txt","utf-8",(err, data)=>{
    //     res.writeHead(200,{"content-type":"text/HTML"})
    //     res.end(data)
    // })

    /* solution 2 : streams */ //problem back presser
    // const readable = fs.createReadStream("./text/text.txt")
    // readable.on("data",(chunk)=>{
    //     res.write(chunk)
    // })
    // readable.on("end",()=>{
    //     res.end()
    // })
    // readable.on("error",()=>{
    //     res.statusCode(500)
    //     console.log("file not found");
    // })

    /* final solution an the main solution */ //ease way //behind the scene pipe it work similar to 2nd method
    const readable = fs.createReadStream("./text/text.txt")
    readable.pipe(res)
})




const Port = 3050;
const localhost="127.0.0.1"
server.listen(Port,localhost,()=>{
    console.log(`serve is running on port ${Port}`)
})