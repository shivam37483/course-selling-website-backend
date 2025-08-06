const { Router } = require("express");
const adminRouter = Router();

adminRouter.get("/signup", (req, res) => {
    res.json({
        msg: "signup done!!!!"
    })
})

adminRouter.post("/login", (req, res) => {
    res.json({
        msg: "login done!!!!"
    })
})

adminRouter.post("/create", (req, res) => {
    res.json({
        msg: "purchase done!!!!"
    })
})

adminRouter.post("/add", (req, res) => {
    res.json({
        msg: "purchase done!!!!"
    })
})

adminRouter.post("/delete", (req, res) => {
    res.json({
        msg: "purchase done!!!!"
    })
})

module.exports = {
    adminRouter: adminRouter
}