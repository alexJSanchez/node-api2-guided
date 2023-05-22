// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require("express");
const AdopterRouter = require("./adopters/adopters-router");
const DogRouter = require("./dogs/dogs-router");
const server = express();

server.use(express.json());
server.use("/api/adopters", AdopterRouter);
server.use("/api/dogs", DogRouter);

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get("/", (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;
