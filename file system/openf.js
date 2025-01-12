const fs=require('fs');
fs.open('newf.txt','w',(err)=>{
    if(err) throw err;
    console.log("Success created");
})