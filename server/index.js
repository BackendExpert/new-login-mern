const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const UserModel = require("./Models/User")
const e = require("express")

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://127.0.0.1"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name, email, password: hash})
        .then(user => res.json({status: "OK"}))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            //password check
            bcrypt.compare(password, user.password, (err, response) =>{
                if(response){
                    //create token
                    const token = jwt.sign({email: user.email, role: user.role},
                        "jwt-secret-key", {expiresIn: '1d'})
                }else{
                    return res.json("Password not match...!")
                }
            })

        }else{
            return res.json("No use Found...!")
        }

    })
})


app.listen(3001, () => {
    console.log("Server Running....!")
})