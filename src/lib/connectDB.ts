import mongoose from "mongoose";
const { DB } = process.env
console.log(DB)
mongoose.connect(DB!)
mongoose.connection.on("error", () => {
    console.log("Error connecting to MongoDB")
})

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
})