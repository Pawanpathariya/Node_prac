const fs=require('fs');
fs.appendFile('pawan.txt','Hello iam pawan',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Success");
    }
})