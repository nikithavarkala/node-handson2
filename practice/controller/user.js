let storedata=[]
const register = (req,res)=>{
    // console.log(req.body);
    const data=req.body;
    // const{name,email}=req.body;

    const user=storedata.find((items)=>{
        if(items.email===data.email){
            return items;
        }
    })

    if(user){
        res.send({msg:"user already exists"})
    }
    else{
        const tempobj={
            name:data.name,
            email:data.email,
            pw:data.pw
        }
        storedata.push(tempobj);
        res.send(storedata);
    }
    
}

const login=(req,res)=>{
    const data=req.body;
    // console.log(req.body);

    const user=storedata.find((items)=>{
        if(items.pw===data.pw && items.email===data.email){
            return items;
        }
    })
    
    if(user){
        res.send({msg:"Login successful"})
    }
    else{
        res.send({msg:"please!! provide correct credentials"})
    }
}

const aboutus=(req,res)=>{
    res.send({
        msg:"Abouts us"
    })
}

const contactus=(req,res)=>{
    res.send({
        msg:"contact us"
    })
}

module.exports ={register,login,aboutus,contactus}