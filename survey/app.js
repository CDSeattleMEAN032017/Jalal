var express = require("express");
var app = express();
var path = require("path");
var bp = require('body-parser');
//configuration here 
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

//use middle ware 

app.use(bp.urlencoded());
//define routes 
app.get('/', function(req,res){
    
    res.render('index');
})
app.post('/display', function(req,res){
   res.render('display',{data:req.body});
})
app.listen(8000, function(){
    console.log("Listing now of 8000");
});
