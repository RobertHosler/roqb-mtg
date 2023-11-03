//Install express server
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = 3081;

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const users = [];

var appData = {
  allSockets: [],
  users: ['starter user']
};

function broadcast(event, data) {
  var i = 0;
  appData.allSockets.forEach(function (socket) {
    // console.log("Socket", i, "Event", event, "Data", data);
    i++;
    socket.emit(event, data);
  });
}

io.on("connection", socket => {
  console.log("New Socket Connected");
  // Keep track of the socket
  appData.allSockets.push(socket);

  socket.on("disconnect", function () {
    console.log("Socket Removed"); 
    appData.allSockets.splice(appData.allSockets.indexOf(socket), 1);
  });
  
  socket.on("getUsers", () => {
    socket.emit("users", appData.users);
  });
  
  socket.on("addUser", (user) => {
    appData.users.push(user.username);
    broadcast('users', appData.users);
  });

  io.emit("users", appData.users);

});

// app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static("./dist/roqb-mtg"));

app.get("/*", function (req, res) {
  console.log("Get of index");
  res.sendFile("index.html", { root: "dist/roqb-mtg/" });
});

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

http.listen(process.env.PORT || port, () => {
  console.log(`Server listening on the port::${port}`);
});