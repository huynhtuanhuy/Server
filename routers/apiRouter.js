const express = require ('express')
const apiRouter = express.Router();
const userRouter = require ('./userRouter')

apiRouter.get("/", (req,res)=>{

})

apiRouter.use("/user",userRouter);
module.exports = apiRouter;