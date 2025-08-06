const express = require("express");
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")

const app = express()

app.use("/user", userRouter)
app.use("/course", courseRouter)
app.use("/admin", adminRouter)

async function main(params) {
    await mongoose.connect("mongodb+srv://admin:yINLnskaAukH3uPS@cluster2099.geca1tb.mongodb.net/coursera-app")
    app.listen(3000)
    console.log("Listening on port 3000")
}

main()
