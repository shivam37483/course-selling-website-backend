const mongo = require("mongoose")

const Schema = mongo.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

const course = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const admin = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String
})

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongo.model("users", user)
const courseModel = mongo.model("courses", course)
const adminModel = mongo.model("admin", admin)
const purchaseModel = mongo.model("purchases", purchaseSchema)

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}