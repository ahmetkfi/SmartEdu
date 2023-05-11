const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser')
const session=require('express-session');
const MongoStore = require('connect-mongo');
const app=express();
const pageControllers=require('./controller/pageController');
const pageRoute=require('./routes/pageRoute');
const courseRoute=require('./routes/coureseRoute');
const categoryRoute=require('./routes/categoryRoute');
const userRoute=require('./routes/userRoute');

//Template Engine
app.set("view engine","ejs");

//global variable
global.userIn=null;



//MIDDLEWARES

app.use(express.static("public"));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret:'my_keyboard_cat',
    resave:false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl:'mongodb://127.0.0.1:27017/smart-edu-db',
    })
}));

//DATABASE CONNECT
main().then(()=>console.log('Connected')).catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/smart-edu-db');
}

//ROUTES
app.use('*',(req,res,next)=>{
    userIn=req.session.userID;
    next();
    });
app.use('/',pageRoute);
app.use('/login',pageRoute);
app.use('/register',pageRoute);
app.use('/courses',courseRoute);
app.use('/contact',pageRoute);
app.use('/about',pageRoute);
app.use('/categories',categoryRoute);
app.use('/users',userRoute);



const port=3000;
app.listen(port,()=>{
    console.log(`App stardet on port ${port}`);
});

