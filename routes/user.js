const { Router } = require("express");
const userRouter = Router();

userRouter.get("/user/signup", (err, data) => {

})

userRouter.post("/user/login", (err, data) => {
    
})

userRouter.post("/user/purchases", (err, data) => {
    
})

module.exports = {
    userRouter: userRouter
}