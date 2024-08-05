node vs express - node is the main thing express ke code se hum server ka code likh pate and
server kaisa react karega wo bhi express ke help se
likhte hai
what is express js - package, routing
why express js - http is difficult to use, express makes this easier
what is routing
the process of creating routes is called routing
/profile
/home
/contact/ijkldkfmc/iudjokflxc
the route in url(requested route) is matched with the routes present in your server.js file/routes you have created.

note-you can install nodemon to automatically run your server on making changes

The boilerplate for express is 
{
    const express=require("express");//importing express
const app =express();//running express

app.get('/',function(req,res){   
    res.send("hello what is up");                                                       
})

app.listen(3000); //port number where you need your output.

}

Middleware
-middleware is a function which runs before every route.
-the routes may excecute or not the middleware always executes.
-middleware executes before routes

app.use() is a middleware 
app.use(function(req,res,next){
});
  it accepts a function containing parameter req,res,next
  -when you --request--(req) for a website,all the details like ex:ip address,device,location all the details related to 
  you will be in the request object and the request is sent to the server present somewhere else.
  -on requesting for something the server responds with data which is present in res object.
  -so,we use res in our server.js to send/respond to the user with data
  -when the control reaches any middleware the control stays ther until you push it.--next-- is used to push the control
  to the next() step/route.
  basically,
  request->users data
  respond->response to that request
  next->to push the control forward

  route parameter(Params)
  -consider an example there are routes as follows
  facebook.com/profile/lokesh
  facebook.com/profile/lokeshreddy
  facebook.com/profile/lokeshreddy

  so we dont create route for every person this is handled using dynamic routing
  we can create dynamic routes where a certain part of the url is changed,it is done using 
  creating parameter(: is used)
  /profile/:username  (: signifies that anything can come in place of username and this username is called params)
    using req.params.username you can access username as the data from browser is sent in the form of request to the server
    CODE:
  {
    app.get("/profile/:username",function(req,res){
    res.send(`hello this is${req.params.username}`);
});

  }

  --template engines
    it is a markup style which later converts into html
  ->we use ejs which is a template engines.
  ->it is basically html with extra powers like performing calculation and adding javascript

  to setup ejs
  1>install ejs
  2>configure ejs
  app.set("view engine","ejs");
  3>create a views folder
  4>make ejs files
  5>use send instead of render

  -NOTE
  make sure the file you render is always present inside views folder,and dont mention ejs in the render function


  power of ejs/template engine 
  1>consider ther is a age word in your page  multiple times so you have to change the word to old you can do it by 
  res.render("index",{age:"old"});
  2>and in the ejs file where the tag of the data is present (age in this case);
  <h1><%=age%></h1>

  on doing this both we can change the word age to old,
  basically ejs is used to update data dynamically.

  --static files


  --to setup static files 

  ->create public folder
  ->inside create 3 More folder images,stylesheets,javascripts
  ->configure the express static
  app.use(express.static('./public'));//use this middleware
  ->understand the path

  ->now you can create a style.css file inside the stylesheets and define the path inside the html file and in href  
  <link rel="stylesheet" href="../stylesheets/style.css">


  --error handling 
  app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  });

  use this in the end of the server and create a error page and render this.. 
  




