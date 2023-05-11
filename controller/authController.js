const User = require("../models/User");
const Category=require("../models/Category");
const Course=require("../models/Course");
const bcrypt = require("bcrypt");
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "sucsess",
      user,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      err,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          //user session
          req.session.userID = user._id;
          res.status(200).redirect("/users/dashboard");
        }
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "failed",
      err,
    });
  }
};
exports.logoutUser = async (req, res) => {
  try {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      err,
    });
  }
};
exports.getDashbordPage= async (req,res)=>{
    const user= await User.findOne({_id:req.session.userID}).populate('courses');
    const categories= await Category.find({});
    const courses = await Course.find({user:req.session.userID}).populate('user');
    res.status(200).render('dashboard',{
        page_name:'dashboard',
        user,
        categories,
        courses
    })
};




