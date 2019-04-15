var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.port || 8080;

io.on("connection", function(socket) {
  console.log("User Connected");
  socket.on("disconnect", function() {
    console.log("User left fam.");
  });
});

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
  });
});

http.listen(port, function() {
  console.log(`listening on *: + ${port}`);
});

// const app = require("express")();
// const http = require("http").Server(app);
// const io = require("socket.io")(http);

// io.on("connection", function(socket) {
//   console.log("user connected");
//   socket.on("chat message", function(msg) {
//     io.emit("chat message", msg);
//   });
//   socket.on("disconnect", function() {
//     console.log("user disconnected");
//   });
// });

// http.listen(8000, function() {
//   console.log("listening on :8000");
// });
