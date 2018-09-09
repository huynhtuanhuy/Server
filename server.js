const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose =require ('mongoose');

const apiRouter = require('./routers/apiRouter')
let app =express();
app.use(bodyParser.json());

app.use('/api',apiRouter);

mongoose.connect("mongodb://localhost/foodyHoaLac", (err)=>{
    if(err) console.log(err);
    else console.log("DB connect")
})
let Port = 9999;
app.listen(Port,(err)=>{
    if(err) console.log(err);
    else console.log(`Server is listening at ${Port}`)
});
