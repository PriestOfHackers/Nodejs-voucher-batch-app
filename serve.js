var express = require('express');
var app = express();
var fs = require("fs");


//How can I improve this method?
app.get('/users', function (req, res) {

  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
 });
})


//How can I improve this method?
app.get('/voucher', function(req, res){

  var text = "";
  var output = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var j = 0; j < 100; j++){
   for (var i = 0; i < 10; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
   }
      output += text+"<br>";
      text= "";
  }

  res.send(output);
});


//How can I improve this method?
var server = app.listen(8081, function () {


   var host = server.address().address
   var port = server.address().port
   console.log("Node.js Alpha-numeric app is listening on http://%s:%s", host, port)
   console.log("1. Users - http://localhost:8081/users")
   console.log("2. Create voucher - http://localhost:8081/voucher")

})