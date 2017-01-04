var express = require('express');
var app = express();

//hosting static files
app.use(express.static(__dirname + '/'));
console.log("Static files initialized...");

//Routing
app.get("/",function(req,res){
       // res.send("hello world");
    res.redirect("/views/index.html");
});
/*app.get("/landing",function(req,res){
     res.redirect("/views/index.html");
})
    
//    app.get("/sample",function(req,res){
//        res.send("good morning");
//        
//        app.get("/texas",function(req,res){
//        res.send("irving");

        });*/
// lunching server
app.listen(8080, function (req,res){
    console.log("Opening port 8080");
    console.log('application launched at localhost:8080');
    
});
