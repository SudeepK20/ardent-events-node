
var express = require('express');



var bodyParser = require("body-parser");
// var mongodb = require("mongodb");
// var ObjectID = mongodb.ObjectID;



var app = express.createServer();
app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());



// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect("mongodb://127.0.0.1:27017/userData", function (err, database) {
//     if (err) {
//         console.log(err);
//         process.exit(1);
//     }
//
//     // Save database object from the callback for reuse.
//     db = database;
//     console.log("Database connection ready");
//
//     // Initialize the app.
//     var server = app.listen(process.env.PORT || 3456, function () {
//         var port = server.address().port;
//         console.log("App now running on port", port);
//     });
// });


    // Initialize the app.
    var server = app.listen(process.env.PORT || 3456, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

// app.post('/userData', function(req,res) {
//     console.log(req.body);
//     db.userData.insertOne(req.body, function(err, docs){
//         console.log(docs);
//         res.json(docs);
//     })
//
// });

// app.post("/singlePlayerData", function(req, res) {
//     var newContact = req.body;
//
//
//     // if (!(req.body.firstName || req.body.lastName)) {
//     //     handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
//     // }
//
//     db.collection("singlePlayerData").insertOne(newContact, function(err, doc) {
//         if (err) {
//             handleError(res, err.message, "Failed to create new contact.");
//         } else {
//             res.status(201).json(doc.ops[0]);
//         }
//     });
// });
//
// app.post("/doublePlayerData", function(req, res) {
//     var newContact = req.body;
//
//
//     // if (!(req.body.firstName || req.body.lastName)) {
//     //     handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
//     // }
//
//     db.collection("doublePlayerData").insertOne(newContact, function(err, doc) {
//         if (err) {
//             handleError(res, err.message, "Failed to create new contact.");
//         } else {
//             res.status(201).json(doc.ops[0]);
//         }
//     });
// });



