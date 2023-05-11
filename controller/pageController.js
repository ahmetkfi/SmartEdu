exports.homePage=(req,res)=>{
    console.log(req.session.userID);
    res.render('index',{
        page_name : 'index'
    });
};
exports.aboutPage=(req,res)=>{
    res.render('about',{
        page_name : 'about'
    });
};
exports.loginPage=(req,res)=>{
    res.render('login',{
        page_name : 'login'
    });
};
exports.registerPage=(req,res)=>{
    res.render('register',{
        page_name : 'register'
    });
};
exports.contactPage=(req,res)=>{
    res.render('contact',{
        page_name : 'contact'
    });
};
exports.dashbordPage=(req,res)=>{
    res.render('dashboard',{
        page_name : 'dashboard'
    });
};
exports.coursesPage=(req,res)=>{
    res.render('courses',{
        page_name : 'courses'
    });
};
exports.courseSinglePage=(req,res)=>{
    res.render('course-single',{
        page_name : 'course-single'
    });
};