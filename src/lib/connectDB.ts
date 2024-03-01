import mongoose from "mongoose";
const { DB } = process.env
console.log(DB)
// mongoose.connect(DB!)
// mongoose.connection.on("error", () => {
//     console.log("Error connecting to MongoDB")
// })

// mongoose.connection.on("connected", () => {
//     console.log("Connected to MongoDB")
// })
const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect(DB, options)
  .then(() => console.log('Connected to MongoDB (^_-)!'))
  .catch((err) => console.error('MongoDB connection error:', err));
