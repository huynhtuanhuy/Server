const express = require ('express');
const userRouter = express.Router();
const userModel = require("../models/userModel")

//Lấy thông tin người dùng
userRouter.get("/:userId",(req,res)=>{
    userModel.findById(req.params.userId,(err,user)=>{
        if(err) res.status(500).send({success:0,err})
        else res.send({success:1,user})
    })
})

//Lấy thông tin các shop của người dùng
userRouter.get("/:userId/shop",(req,res)=>{
    userModel.findById(req.params.userId)
        .populate('shop')
        .exec((err,user)=>{
            if(err) res.status(500).send({success:0,err})
            else {
                let shop = user.shop;
                res.send({success:1,shop})
            }
        })
})
//Lấy thông tin các sản phẩm đã order
userRouter.get("/:userId/order",(req,res)=>{
    userModel.findById(req.params.userId)
        .populate('order')
        .exec((err,user)=>{
            if(err) res.status(500).send({success:0,err})
            else {
                let order = user.order;
                res.send({success:1,order})
            }
        })
})
userRouter.post("/",(req,res)=>{
    const {name,email,avataUrl,gender}= req.body;
    userModel.create(
        {name,email,avataUrl,gender},
        (err,userCreated)=>{
            if(err) res.status(500).send({success:0,err})
            else res.status(201).send({success:1, userCreated})
        }
    )
})

module.exports = userRouter;
