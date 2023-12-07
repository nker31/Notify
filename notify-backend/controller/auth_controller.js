import { UserModel } from "../models/userModel.js";
import bcrypt, { hash } from "bcrypt";
import { generatedRandomToken } from "../config.js";
import Jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.status(400).json("No record existed");
      } else {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;

          if (result) {
            const payloads = {
              userId: user._id,
              email: user.email,
              username: user.username,
            };
            const token = Jwt.sign(payloads, "secretkey");
            res.cookie("accessToken", token).status(200).json("Login Success");
          } else {
            res.status(400).json("The email or password is incorrect.");
          }
        });
      }
    })
    .catch((error) =>
      res.status(400).json({ error: "Error finding user", details: error })
    );
};

export const register = (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  const newUserWithHashedPassword = { ...req.body, password: hashedPassword };

  const { email, username } = req.body;

  UserModel.findOne({ $or: [{ email }, { username }] })
    .then((existingUser) => {
      if (existingUser) {
        if (existingUser.email === email) {
          return res.status(400).json({ error: "Email already exists" });
        }
        if (existingUser.username === username) {
          return res.status(400).json({ error: "Username already exists" });
        }
      } else {
        UserModel.create(newUserWithHashedPassword)
          .then((users) => res.json(users))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) =>
      res.status(500).json({ error: "Server error", details: err })
    );
};

export const logout = (req, res) => {
  res.clearCookie("accessToken", {
    secure:true,
    sameSite:"none"
  }).status(200).json("User has logged out");

};

export const verifyToken = (req, res) => {
  // assuming the accessToken is sent as a cookie
  const token = req.cookies.accessToken;
  if (token) {
    Jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        res.status(401).json({ isAuthenticated: false });
      } else {
        res.status(200).json({ isAuthenticated: true });
      }
    });
  } else {
    res.json({ isAuthenticated: false });
  }
};
