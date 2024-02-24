const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypy = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const UserModel = require("./Models/User")

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    bcrypy.hash(password, 10)
    .then(hash => {
        
    })
})


app.listen(3001, () => {
    console.log("Server Running....!")
})