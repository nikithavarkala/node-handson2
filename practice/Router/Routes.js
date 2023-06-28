const express = require("express");
const route = express.Router();

const { login, signup, main, Hollywood, Bollywood, Food, Fitness, Technology } = require('../controller/api');

route.get("/", (req, res) => {
    res.send("Hello, this is the Default path!");
});

route.post("/login", login);
route.post("/signup", signup);
route.get("/api/main", main);

route.get('/Hollywood', Hollywood);
route.get('/Bollywood', Bollywood);
route.get('/Food', Food);
route.get('/Fitness', Fitness);
route.get('/Technology', Technology);

route.get('/parameters/:age', (req, res) => {
    let id = req.params.age;
    console.log(id);
    // let age = req.query.age;
    // if (age >= 18) {
    //     res.send("user can Vote")
    // }
    // else {
    //     res.send("user can't Vote")
    // }
    if (id >= 18) {
        res.send("user can Vote")
    }
    else {
        res.send("user can't Vote")
    }
})

module.exports = route;
