const http=require('http')
const fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('pawan.txt',(err,data)=>{
        res.write(data);
        res.end(" <h1> this is end </h1> ");
    })
}).listen(3000)