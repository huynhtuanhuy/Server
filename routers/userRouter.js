const express = require ('express');
const userRouter = express.Router();
const userModel = require("")

userRouter.get("/:userId",(req,res)=>{
    UserModel.findById(req.params.userId,(err,user)=>{
        if(err) res.status(500).send({success:0,err})
        else res.send({success:1,user})
    })
})

userRouter.post("/",(req,res)=>{
    const {name,email,avataUrl,gender}= req.body;
    UserModel.create(
        {name,email,avataUrl,gender},
        (err,userCreated)=>{
            if(err) res.status(500).send({success:0,err})
            else res.status(201).send({success:1, userCreated})
        }
    )
})

module.exports = userRouter;
