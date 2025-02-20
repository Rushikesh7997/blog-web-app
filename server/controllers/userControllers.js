//  Register a new user
// post : api/user/register
// Unprotected 
const registerUser = (req, res, next) => {
    res.json("Register User")
};


//  Login a Registered user
// post : api/user/login
// Unprotected 
const loginUser = (req, res, next) => {
    res.json("Login User")
};


//  User Profile
// post : api/user/:id
// Protected 
const getUser = (req, res, next) => {
    res.json("User Profile")
};


//  Change user Avatar 
// post : api/user/change-avatar
// Protected 
const changeAvatar = (req, res, next) => {
    res.json("Change User Avatar")
};


//  Edit user Details
// post : api/user/edit-user
// Protected 
const editUser = (req, res, next) => {
    res.json("edit User details")
};


//  Get Authors
// post : api/user/authors
// UnProtected 
const getAuthors = (req, res, next) => {
    res.json("get all users/authors")
};


module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors} 