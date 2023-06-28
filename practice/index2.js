const http = require('http');
const express = require("express");
const route = require('./Router/Routes');
const userRoute=require('./Router/userRoute')

const app = express();

app.use(express.json())

app.use(route);
app.use('/user',userRoute)

// app.use(express.json())

// app.use('/next',(req,res,next)=>{
//     console.log("next");
//     next();
// })
// app.get("/next",(req,res,next)=>{
//     console.log("next/next");
//     res.send("next/next path");
// })
// // app.use('/',(req,res,next)=>{
// //     res.send("Default")
// // })

app.get("/path",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'/Node','index.js'))
})



const Port = 3001;

const server = http.createServer(app);
server.listen(Port, () => {
    try {
        console.log(`server is running on port no.${Port}`);
    }
    catch (err) {
        console.log(err);
    }
});