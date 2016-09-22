var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var breakingBad={
  title:'BREAKING-BAD|SERIES',
  heading:'BREAKING BAD',
  release_date:'jan 20 2008',
  content:` <p>In this series the main role is played by:</p>`
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var release_date=data.release_date;
    var content=data.content;

    var htmlTemplate=`<html>
        <head><title>${title}</title>
         <link href="/ui/style.css" rel="stylesheet" />
         </head>
        <body>
            <h1 style="text-align:center;text-decoration:underline">${heading}</h1>
            <p><span class="main2">release-date</span>:${release_date}</p>
            <br></br>
             ${content}
           <div class="main"><p><span class="main2">HERO</span>:BRYAN CRANSTONE</p></div> 
        </body>
    </html>` ;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/BREAKING-BAD.html', function (req, res) {
  res.send(createTemplate(breakingBad));
});
app.get('/ui/BLACKLIST.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'BLACKLIST.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
