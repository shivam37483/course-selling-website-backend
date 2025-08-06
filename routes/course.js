const { Router } = require("express")

const courseRouter = Router()

courseRouter.get("/courses", (req, res) => {
    res.json({
        msg: "course done!!!!"
    })
})

module.exports = {
    courseRouter: courseRouter
}