const authService =  require("../services/authService")
const user = require("../models/user")
const register = async(req,res)=>{
    try{
        const userdata= req.body;
        const existingUser = await user.findOne({ email: userdata.email });

       
        if (existingUser) {
             return res.status(409).json({ message: "User Already Exists" });
        }

        const data = await authService.register(userdata);
      
        res.status(201).json({userId:data._id,message:"user Registered Successfully"});
       
    
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Registration Error"})

}
}
const login = async(req,res)=>{
    try{
        const userData = req.body;

        const {token,userId} = await authService.loginUser(userData);
      
        res.status(200).json({message:"User registered succesfully",token,userId})
    
    }
   catch(err){
    res.status(500).json({message:err.message})
   }



}
const somedata = (req,res)=>{
    console.log(req)
    console.log("Yup working")
    res.send("success")
}
module.exports = {register,login,somedata}