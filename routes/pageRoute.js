const express=require('express');
const pageController=require('../controller/pageController');
const { route } = require('./coureseRoute');
const redirectMiddleware = require('../middlewares/redirectMiddleware');
const router=express.Router();

router.route('/').get(pageController.homePage);
router.route('/about').get(pageController.aboutPage);
router.route('/login').get(redirectMiddleware,pageController.loginPage);
router.route('/register').get(redirectMiddleware,pageController.registerPage);
router.route('/contact').get(pageController.contactPage);
router.route('/dashboard').get(pageController.dashbordPage);


module.exports=router;