const {register,login,aboutus,contactus} = require("../controller/user");
const userRoute = require("express").Router();
const {specificAuth}=require('../middleware/auth');

userRoute.post('/register',register);
userRoute.post('/login',login)
userRoute.get('/aboutus',specificAuth,aboutus)
userRoute.get('/contactus',specificAuth,contactus)

module.exports = userRoute;