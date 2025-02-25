
// create a post 
// post : api/posts
// protected
const createPost = async(req, res, next) =>{
    res.json("Create Post")
}

// get all post 
// get : api/posts
// protected
const getPosts = async(req, res, next) =>{
    res.json("Get all posts")
}

// get single post 
// get : api/posts/:id
// unprotected
const getPost = async(req, res, next) =>{
    res.json("get single Post")
}

// get posts by category
// post : api/posts/categories/:category
// protected
const getCatPosts = async(req, res, next) =>{
    res.json("Get posts by category")
}

// get user/author post 
// get : api/posts/users/:id
// unprotected
const getUserPosts = async(req, res, next) =>{
    res.json("Get User Posts")
}

// Edit Post
// patch : api/posts/:id
// protected
const editPost = async(req, res, next) =>{
    res.json("Edit Post")
}

// Delete Post
// Delete : api/posts/:id
// protected
const deletePost = async(req, res, next) =>{
    res.json("Delete Post")
}


module.exports = {createPost, getPost, getPosts,getCatPosts, getUserPosts, editPost, deletePost}