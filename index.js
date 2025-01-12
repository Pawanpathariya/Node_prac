const http=require('http');
const pra1=require("./pra1.js")
http.createServer((req,res)=>{
    res.write("<h1> Hello world </h1>")
    res.write(pra1.Mydata())
    res.write(pra1.Mydata1())

    res.end("<h1> this is end </h1>");
}).listen(3000);