require("dotenv").config()
const express = require("express")
const app = express()
const authRoutes = require("./routes/authRoutes")
const moviesRoutes = require("./routes/moviesRoutes")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log("Db connected successfully!")
})
const PORT = process.env.PORT ||5000
app.use(express.json())
app.use("/api/users/",authRoutes)
app.use("/api/movies/",moviesRoutes)

app.listen(PORT,()=>{
    console.log("Server is listening",PORT)
})