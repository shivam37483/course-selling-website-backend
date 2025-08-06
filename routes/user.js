const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { Router } = require("express");
const { userModel } = require("../db")



const userRouter = Router();

const JWT_PASSKEY = "getoppppppppp"

userRouter.post("/signup", async (req, res) => {
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    
    const hashedPass = await bcrypt.hash(password, 7)

    const response = await userModel.findOne({
        email: email
    })

    if (response) {
        return res.json({
            msg: "email already exists"
        })
    }

    await userModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPass
    })

    res.json({
        msg: "signup done!!!!"
    })
})

userRouter.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await userModel.findOne({
        email: email
    })
    
    if (!response) {
        return res.status(403).json({
            msg: "Invalid user"
        })
    }

    const matchedPassword = await bcrypt.compare(password, response.password)
    
    if (matchedPassword) {
        const token = jwt.sign(email, JWT_PASSKEY)

        return res.json({
            msg: "Logged in",
            token: token
        })
    }

    res.status(403).json({
        msg: "Invalid cred"
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