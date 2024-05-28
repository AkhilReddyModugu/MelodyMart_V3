import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/UserModel.js';

const jwtSecret= 'your_jwt_secret_key';
const loginController= async (req,res)=>{
    const {email,password}=req.body;
    
    try{
        // Find user by email
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(400).json({msg:'Invalid email or password'});
        }
        // Compare password with hashed password in database
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'Invalid email or password'});
        }
        //Generate JWT token
        const token= jwt.sign({userId:user._id,role:user.role},jwtSecret,{expiresIn:'1h'});
        res.status(200).json({token});
    }
    catch(error){
        console.error('Error during login:',error);
        res.status(500).json({msg:'Server Error'}); 
    }
}
export default loginController;