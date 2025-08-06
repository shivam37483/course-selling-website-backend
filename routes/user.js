const { Router } = require("express");
const userRouter = Router();

userRouter.get("/signup", (req, res) => {
    res.json({
        msg: "signup done!!!!"
    })
})

userRouter.post("/login", (req, res) => {
    res.json({
        msg: "login done!!!!"
    })
})

userRouter.post("/purchases", (req, res) => {
    res.json({
        msg: "purchase done!!!!"
    })
})

module.exports = {
    userRouter: userRouter
}