"use strict"
const fs = require("fs");
const http = require("http");
const { json } = require("stream/consumers");
const url = require("url")
const slugify = require("slugify")

const replaceTemplate = require("./modules/replaceTemplate")


// fs.writeFileSync("./folder/newFile.json",
// "newData"
// )

/*callback reading from one file and writing in another */
// fs.readFile("./folder/file1.json","utf-8",(error,data)=>{
//     fs.readFile(`./folder/${data}`,"utf-8",(err,d)=>{
//         // console.log(d)
//         fs.writeFile("./folder/file3.txt",`${d}`,"utf-8", error=>{
//             console.log("file has been written")
//         })
//     })
// })


////////////////////////////////////////////////////////////
/* server */ // creating server using node only
const overview = fs.readFileSync(`${__dirname}/template/overview.html`,"utf-8")
const template_card = fs.readFileSync(`${__dirname}/template/template_card.html`,"utf-8")
const product = fs.readFileSync(`${__dirname}/template/product.html`,"utf-8")

const data = fs.readFileSync(`${__dirname}/product/product.json`,"utf-8")
const dataObject=JSON.parse(data)

const slugs = dataObject.map(e=>slugify(e.productName,{lower:true}))
console.log(slugs)

const server = http.createServer((req,res)=>{
    const {query,pathname} = url.parse(req.url,true);
 
    // overview
    if (pathname === "/" || pathname === "/overview") {
        res.writeHead(200, {"content-type": "text/html"});
        let cardHtml = dataObject.map((el)=>replaceTemplate(template_card,el)).join("")
        const newOverview=overview.replace("{%PRODUCT_CARD%}",cardHtml)
        res.end(newOverview);
    }
    // product
    else if (pathname === "/product/" ) {
        res.writeHead(200, {"content-type": "text/html"});
        let productJson = dataObject[query.id]
        const output = replaceTemplate(product,productJson)
        res.end(output);
    }
    // api
    else if (pathname === "/api") {
        res.writeHead(200, {"content-type": "application/json"});
        res.end(data);
    }
    // not found
    else {
        res.writeHead(404, { "content-type": "text/html", "my-awn-header": "aaa", });res.end("<h1>the page not found</h1>");
    }

})

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running http://127.0.0.1:3000");
})