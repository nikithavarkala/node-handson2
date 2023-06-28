const Allauth=(req,res,next)=>{
    console.log("auth Api");
    next()
}

const specificAuth=(req,res,next)=>{
    console.log("specific auth Api");
    next()
}

module.exports={Allauth,specificAuth}