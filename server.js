var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});
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


