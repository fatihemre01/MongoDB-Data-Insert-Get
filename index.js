const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/myDb")
    .then(() => console.log("Connected"))

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model("User", userSchema)

let users = [
    { "name": "John", "age": 18},
    { "name": "Kevin", "age": 25}
]

async function createUser() {
    const result = await User.create(users)
    console.log(result)
}

async function getUser() {
    const result = await User
        .find()
        .or([{name: "John"}, {age: 25}])
    console.log(result)
}

async function updateUser() {
    const result = await User.updateOne({name: "Kevin"}, {age: 12})
    console.log(result)
}

async function deleteUser() {
    const result = await User.deleteOne({name: "Kevin"})
    console.log(result)
}
