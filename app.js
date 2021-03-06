var express = require('express');
var app = express();


//api 서비스를 할 배열
const contents = [
    {
        id:1,
        name:'장서연'
    },
    {
        id:2,
        name:'김경호'
    }
]

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  //res.send('hello world');
  res.json(contents);
});


//express 웹서버 리스닝
app.listen(5000, () => console.log(`Listening on port 5000`));