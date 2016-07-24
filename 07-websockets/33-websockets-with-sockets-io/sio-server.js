var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app).listen(3000);
var io = require("socket.io")(server);

app.use(express.static("./public"));

io.on("connection", function(socket) {

  socket.on("chat", function(message) {

    socket.broadcast.emit("message", message);

  });

	socket.emit("message", "Welcome to Some Chat.....");

});

console.log("Starting Socket App..... :D");
