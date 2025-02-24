const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const HttpError = require("../models/errorModel");
const fs = require("fs");
const path = require('path');
const {v4: uuid} = require('uuid');


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
        res.status(200).json(user);
    } catch (error) {
        return next(new HttpError(error))
    }
};


// Change user Avatar 
// post : api/user/change-avatar
// Protected 
const changeAvatar = async (req, res, next) => {
    try{
        if(!req.files.avatar){
            return next(new HttpError("Please choose an image.", 422))
        }
        // find user form database
        const user = await User.findById(req.user.id)
        // Delete old avatar if exists
        if(user.avatar){
            fs.unlink(path.join(__dirname, '..', 'uploads', user.avatar),(err)=>{
                if(err){
                    return next(new HttpError(err))
                }  
            })
        }

        const {avatar} = req.files;
        // check file size
        if(avatar.size>500000){
            return next(new HttpError("Profile picture is too big, image size is less tha 500kb"), 422)
        }

        let fileName;
        fileName = avatar.name;
        let splittedFilename = fileName.split('.');
        let newFilename = splittedFilename[0] + uuid() + '.' + splittedFilename[splittedFilename.length-1];
        avatar.mv(path.join(__dirname,'...', 'uploads', newFilename),async (err)=>{
            if(err){
                return next(new HttpError(err))
            }
            const updatedAvatar = await User.findByIdAndUpdate(req.user.id, {avatar:newFilename},{new:true});
            if(!updatedAvatar){
                return next(new HttpError("Avatar couldn't be changed", 422))
            } 
            res.status(200).json(updatedAvatar)
        })
    } catch(error) {
        return next(new HttpError(error))
    }
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
   try {
        const authors = await User.find().select('-password');
        res.json(authors);
   } catch (error) {
        return next(new HttpError(error))
   } 
};


module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors} 