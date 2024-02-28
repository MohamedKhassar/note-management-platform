import mongoose from "mongoose";
const { DB } = process.env
mongoose.connect(DB!)
mongoose.connection.on("error", () => {
    console.log("Error connecting to MongoDB")
})

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
})