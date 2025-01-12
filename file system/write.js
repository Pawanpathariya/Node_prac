const fs=require('fs');
fs.writeFile("newfile","this is new file",(err)=>{
    if(err) throw err;
    console.log("Success");
})