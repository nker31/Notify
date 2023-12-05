import { UserModel } from '../models/userModel.js'
import bcrypt, { hash } from 'bcrypt'
import { generatedRandomToken } from '../config.js';
import Jwt from 'jsonwebtoken';

export const login = (req, res) => {
    const { email, password } = req.body;

    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                res.json('No record existed')
            } else {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err

                    if (result) {

                        const payloads = {
                            userId: user._id,
                            email: user.email,
                            username: user.username
                        };

                        const Token_key = generatedRandomToken();

                        Jwt.sign(payloads, Token_key, { expiresIn: '2h' }, (jwterr, token) => {
                            if (jwterr) throw jwterr;
                            res.json({ message: 'Success', token: token });
                        })
                    } else {
                        res.json('password is incorrect');
                    }
                })
            }
        })
        .catch(error => res.status(500).json({ error: 'Error finding user', details: error }));
}

export const register = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)
    const newUserWithHashedPassword = { ...req.body, password: hashedPassword }

    const { email, username } = req.body

    UserModel.findOne({ $or: [{ email }, { username }] })
        .then(existingUser => {
            if (existingUser) {
                if (existingUser.email === email) {
                    return res.status(400).json({ error: 'Email already exists' });
                }
                if (existingUser.username === username) {
                    return res.status(400).json({ error: 'Username already exists' });
                }
            } else {
                UserModel.create(newUserWithHashedPassword)
                    .then(users => res.json(users))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => res.status(500).json({ error: 'Server error', details: err }));
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