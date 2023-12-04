const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/userModel')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://admin:admin@notify.wefaasq.mongodb.net/notify");

app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json('Success')
            } else {
                res.json('the password is in correct')
            }
        } else {
            res.json('No record existed')
        }
    })

})

app.listen(3001, () => {
    console.log("server is running")
})
