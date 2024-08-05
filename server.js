const express=require("express");
const app =express();

app.set("view engine","ejs");

app.use(express.static('./public'));

app.get("/error",function(req,res,next){
    throw Error("something went wrong");
})

app.get('/',function(req,res){
    res.render("index",{name:"Lokesh Reddy"});
});

app.get('/profile',function(req,res){
    res.send("Hello from profile page");
});

app.get("/profile/:username",function(req,res){
    res.send(`hello this is ${req.params.username}`);
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  });

app.listen(3000);