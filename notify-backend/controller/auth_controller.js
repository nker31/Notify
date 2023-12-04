import {UserModel} from '../models/userModel.js'

export const login = (req, res) => {
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
}

export const register = (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

export const logout = (req, res) => {
    
}

// app.post('/login', (req, res) => {
//     const {email, password} = req.body;
//     UserModel.findOne({email: email})
//     .then(user => {
//         if(user){
//             if(user.password === password){
//                 res.json('Success')
//             } else {
//                 res.json('the password is in correct')
//             }
//         } else {
//             res.json('No record existed')
//         }
//     })
// })