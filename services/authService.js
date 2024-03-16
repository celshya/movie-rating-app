const user = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const register = async(userdata)=>{

    try{
       
       
        let data = new user(userdata);
        
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(userdata.password,salt);
        data.password = hashed;
       
        await data.save();
        
        return data;
        }
        

    
    catch(err){
        throw err;
    }

}
const loginUser = async(userdata)=>{
    try{
        const {email,password} = userdata;
        const data = await user.findOne({email})
    
    if(!data){
        throw new Error("User not Found")
    }
    const isMatch = await data.comparePassword(password)
   
    if(!isMatch){
        throw new Error("Password mismatch!")
    }
    let userId = data._id;
  
    const token = jwt.sign({id:userId},process.env.JWT_SECRET)
  
    return {token,userId}

    }catch(err){
        throw err;
    }
    

}

module.exports ={register,loginUser}