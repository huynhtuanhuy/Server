const express = require('express');
const mongoose = require('mongoose');
const shopRouter = require('./router/shopRouter');
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const orderRouter = require('./router/orderRouter');
const authRouter = require('./router/authRouter');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

let backend = express();

backend.use(session({
    secret: 'Nguoi yeu dau hoi~ em mai la mat troiiii',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

backend.use(cors({
    credentials: true,
    origin: true
}))

backend.use(bodyParser.urlencoded({ extended: false }));
backend.use(bodyParser.json());
backend.use('/shop', shopRouter);
backend.use('/user', userRouter);
backend.use('/product', productRouter);
backend.use('/order', orderRouter);
backend.use('/auth', authRouter);


let host = 'mongodb://FoodyHoLa:Hola123@ds243212.mlab.com:43212/foodyhoalac';
// let host = 'mongodb://localhost/Project';
mongoose.connect(host, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("mongodb success!")
    }
});

backend.listen(process.env.PORT || 8080, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("Server is listening with localhost 8080");
    }
})