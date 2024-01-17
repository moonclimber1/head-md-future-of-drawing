const KEY_PATH = "localhost+2-key.pem";
const CERT_PATH = "localhost+2.pem";

const express = require("express");
const { createServer } = require("https");
const { Server } = require("socket.io");
const { readFileSync } = require("fs");

const app = express();

const server = createServer(
  {
    key: readFileSync(KEY_PATH),
    cert: readFileSync(CERT_PATH),
  },
  (req, res) => {
    res.writeHead(200);
    res.end(`Future of Drawing - Socket Server is working\n`);
  }
);
const io = new Server(server, {
  cors: {
    origin: true,
  },
});

server.listen(3333, () => console.log("Socket-Server listening on *:3333"));

app.get("/", (req, res) => {
  res.send("<h1>Ants socket server working</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("pencilData", (data) => {
    // Broadcast the 'pointsStraight' event to the second client
    console.log("Broadcast pencilData");
    socket.broadcast.emit("pencilData", data);
  });

  // socket.on("pointsCurved", (data) => {
  //   // Broadcast the 'pointsCurved' event to the second client
  //   console.log("Broadcast pointsCurved");
  //   socket.broadcast.emit("pointsCurved", data);
  // });
});
