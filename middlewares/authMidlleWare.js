const User= require('../models/User');

module.exports= async (req,res,next)=>{
    try{
        const user= await User.findById(req.session.userID);
        if(!user) return res.redirect('/login');
        next(); 
    }catch (err){
        res.status(404).json({
            status:'failed',
            err
        })
    }
};
