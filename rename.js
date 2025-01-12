const fs=require('fs');
fs.rename('pawan.txt','pawan1.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Success");
    }
})