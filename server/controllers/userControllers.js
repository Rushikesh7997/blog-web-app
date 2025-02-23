const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const HttpError = require("../models/errorModel");



// Register a new user
// post : api/user/register
// Unprotected 
const registerUser = async (req, res, next) => {
    try {
        const {name, email, password, password2} = req.body;
        if(!name || !email || !password){
            return next(new HttpError("Fill in all Fields.", 422))
        }
        const newEmail = email.toLowerCase();
        const emailExists = await User.findOne({email: newEmail});

        if(emailExists){
            return next(new HttpError("Email already exists.", 422))
        }

        if((password.trim()).length < 6){
            return next(new HttpError("Password should be at least 6 characters.", 422))
        }

        if(password != password2){
            return next(new HttpError("Password don not match", 422))
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        const newUser = await User.create({name, email:newEmail, password: hashedPass});
        res.status(201).json(`New User ${newUser.email} registered.`);
    } catch (error) {
        console.log(error);
        return next(new HttpError("User registration failed.", 422))
    }
};


// Login a Registered user
// post : api/user/login
// Unprotected 
const loginUser = async (req, res, next) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return next(new HttpError("Fill in all fields.",422))
        }
        const newEmail = email.toLowerCase();
        const user = await User.findOne({email: newEmail});
        if(!user){
            return next(new HttpError("Invalid credentials.",422))
        }
        const comparePass = await bcrypt.compare(password, user.password)
        if(!comparePass){
            return next(new HttpError("Invalid credentials.",422))
        }
        const {_id: id, name} = user;
        const token = jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn: "1d"});

        res.status(200).json({token, id, name})
    } catch (error){
        console.log(error)
        return next(new HttpError("Login failed. Please check your credential.",422))
    }
};


//  User Profile
// post : api/user/:id
// Protected 
const getUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id).select('-password');
        if(!user){
            return next(new HttpError("User not found.", 404))
        }
        res.json("User Profile")
    } catch (error) {
        return next(new HttpError(error))
    }
};


// Change user Avatar 
// post : api/user/change-avatar
// Protected 
const changeAvatar = async (req, res, next) => {
    res.json("Change User Avatar")
};


// Edit user Details
// post : api/user/edit-user
// Protected 
const editUser = async (req, res, next) => {
    res.json("edit User details")
};


// Get Authors
// post : api/user/authors
// UnProtected 
const getAuthors = async (req, res, next) => {
    res.json("get all users/authors")
};


module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors} 