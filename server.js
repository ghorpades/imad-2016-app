var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
 'article-one' : {
    title: "Article One | SANJEEV",
    heading: "Article one",
    content : `
            <p>
                        This is my first page on the article one, learning with IMAD and different ascpets of web technology
                    </p>
                    <ol>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>nodejs</li>
                    </ol>
                    <p>
                       In association with IMAD & Hasura.io.
                    </p>
    
    `
 },
 
 'article-two' :{
     title :'Article Two | Sanjeev',
     heading: 'Article Two',
     content: `
            <p> This is article two written on how to create new HTML file in github</p>
                <ul>
                    <li>Login to github</li>
                    <li>Navigate to your project folder</li>
                    <li>Click on the UI folder in your project</li>
                    <li>Click on the Create file button</li>
                    <li>This will allow you to create a new file of type you want.(In this case we create html project)</li>
                </ul>
                
            <p>In association with IMAD, Hasura.io </p>
     `
 },
 
 'article-three':{
    title:'Article Three | SANJEEV',
    heading:'Article Three',
    content:`
             <p>This Article three tells about how to edit your file in clould.imad.hasura.io</p>
                <ul>
                    <li>Login to your http://cloud.imad.hasura.io using your github id</li>
                    <li>Click on the code console</li>
                    <li>This will take you to code console page</li>
                    <li>this conosle page shows File added on the project on the left pane</li>
                    <li>You can restart your webserver by clickingon the Restart button on the left pane</li>
                    <li>Click on the Go To app link to check/test your code </li>
                </ul>
            <p>In association with IMAD, Hasura.io</p>
    
    `
 }
 
}

function createTemplate (data){
    var title= data.title;
    var heading= data.heading;
    var content= data.content; 
    var htmltemplate=`  <html>
    <head>
    <title>
        ${title}
    </title>
        <meta name="viewport" content="width=device=width,inital-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
     </head>
     <body>
         <div class="container">
                <div>
                     <a href ="/">HOME</a>
                </div>
                <hr/>
                    ${heading}
                    ${content}
        </div>
     </body>
</html>`

return htmltemplate
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

/*app.get('/article-one', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});*/

/*
app.get('/article-one', function (req, res) {
   res.send(createTemplate(articleOne));
});*/



/*
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});*/


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// The count function should be above the aricle function for the call in the server.js file or else i will invoke artilce function and give an create Templeate error
var counter =0;
app.get('/count', function (req,res){
   counter = counter+1;
   res.send(counter.toString());
});

app.get('/:name', function (req, res) {
   
   var name = req.params.name;
   res.send(createTemplate(articles[name]));
}); 


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names =[];
app.get('/submit-name/', function (req, res) { // jquery /submit?name=xxxx
  // get the names from the request
  
 // var name = req.params.name;
  
  var name = req.query.name;
  names.push(name);
  
  //json : java scirpt object notaation.. which converts objects to string
  
  res.send(JSON.stringify(names));
  
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
