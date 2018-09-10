const express = require('express');
const mongoose = require('mongoose');
const shopRouter = require('./router/ShopRouter');
const userRouter = require('./router/UserRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

let backend = express();

backend.use(cors());

backend.use(bodyParser.urlencoded({ extended: false }));
backend.use(bodyParser.json());
backend.use('/shop', shopRouter);
backend.use('/user', userRouter);


// let host = 'mongodb://FoodyHoLa:Hola123@ds243212.mlab.com:43212/foodyhoalac';
let host = 'mongodb://localhost/Project';
mongoose.connect(host, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("mongodb success!")
    }
});

backend.listen(8080, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("Server is listening with localhost 8080");
    }
})