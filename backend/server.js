const express = require("express")
const connectDB = require("./config/db")
require('dotenv').config()


const app = express()
app.use(express.json())

const PORT = process.env.PORT

app.get("/health", (req,res) => {

    res.send("Healthy API is working fine...")
})







app.listen(PORT, () => {

    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`)
})