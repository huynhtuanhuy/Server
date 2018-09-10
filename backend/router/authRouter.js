const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const authRouter = express();
const userModel = require("../model/userModel");


authRouter.post("/login", (req,res) => {
    const {} = req.body;
    if (!username || !password) {
        res.status(400).send({success: 0, message: "Missing Username or Password"})
    } else {
        userModel.findOne({username}) 
        .then (userFound => {
            if(!userFound) {
                res.status(404).send({success: 0, message: "404 Not found"});
            } else {
                const compare = bcrypt.compareSync(password, userFound.hashPassword);
                if(compare) {
                    req.session.user = {username: userFound.username, name: userFound.name, userID: userFound._id};
                    res.send({success: 1, message: "Success!!!"});
                } else {
                    res.status(401).send({success:0, message: "Wrong password"});
                }
            }
        })
        .catch(err => res.status(500).send({success: 0, message: err}));
    }
})

authRouter.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).send({sussecc: 0, err});
        } else {
            res.send({success: 1, message:"Log out success"})
        }
    })
})

module.exports = authRouter;