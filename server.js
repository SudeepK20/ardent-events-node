var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + "/app"));

// var mongojs = require('mongojs');
// var db = mongojs('carouselSection', ['carouselSection']);
// var dbUser = mongojs('userData', ['userData']);
//
// var bodyParser = require('body-parser');
//
//
// app.use(express.static(__dirname + "/app"));
// app.use(bodyParser.json());
//
// app.get('/carouselSection', function (req,res) {
//     console.log("Inside get function");
//
//     db.carouselSection.find(function(error,docs){
//         console.log(docs);
//         res.json(docs);
//     });
//
// });
//
// app.post('/userData', function(req,res) {
//     console.log(req.body);
//     dbUser.userData.insert(req.body, function(err, docs){
//         console.log(docs);
//         res.json(docs);
//     })
//
// });


app.listen(3456);
console.log("Server running on port 3456");