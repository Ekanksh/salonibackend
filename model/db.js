const mongoose=require('mongoose');


mongoose.connect('mongodb://0.0.0.0:27017/test',{ useNewUrlParser: true },(err)=>{
    if(err){console.log("error in db connection", err)}
    else{console.log("database connected")}  
    });