const express=require('express');
const courseController=require('../controller/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router=express.Router();


router.route('/').post(roleMiddleware(["teacher","admin"]),courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);
router.route('/enroll').post(courseController.enrollCourse);
module.exports=router;