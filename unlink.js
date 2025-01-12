const fs=require('fs');
fs.unlink('newfile.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Success");
    }
})