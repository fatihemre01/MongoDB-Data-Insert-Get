//Import mongoose and connecting to mongodb
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/myDatabase")
    .then(() => console.log("Connected!"))
    .catch(err => console.log(err))

//Creating a schema
const courseSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    isPublished: Boolean
})

//Creating a model
let Course = mongoose.model("Course", courseSchema)

let courses = [
    { name: "JavaScript Tutorial", price: 10, quantity: 25, isPublished: true },
    { name: "Nodejs Tutorial", price: 15, quantity: 5, isPublished: false },
    { name: "Mongodb Tutorial", price: 20, quantity: 2, isPublished: true },
]


function insertCourses() {
    Course.collection.insertMany(courses)
}

async function getCourses() {
    return await Course
        .find({isPublished: true})
        .sort({name: 1})
        .select({name: 1, _id: 0})
}

getCourses().then(x => console.log(x))

//insertCourses()