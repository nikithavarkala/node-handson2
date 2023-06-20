const express = require("express");
const route = express.Router();

const { login, signup, main } = require('../controller/api');

route.get("/", (req, res) => {
    res.send("Hello, this is the Default path!");
});

route.post("/login", login);
route.post("/signup", signup);
route.get("/api/main", main);

module.exports = route;
