const express=require('express');
const app=express();
const pageControllers=require('./controller/pageController');

//Template Engine
app.set("view engine","ejs");

//MIDDLEWARES
app.use(express.static("public"));


//ROUTES
app.get('/',pageControllers.homePage);
app.get('/login',pageControllers.loginPage);
app.get('/register',pageControllers.registerPage);
app.get('/dashboard',pageControllers.dashbordPage);
app.get('/courses',pageControllers.coursesPage);
app.get('/course-single',pageControllers.courseSinglePage);
app.get('/contact',pageControllers.contactPage);
app.get('/about',pageControllers.aboutPage);


const port=3000;
app.listen(port,()=>{
    console.log(`App stardet on port ${port}`);
});

