const {Router} = require('express');
const {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors} = require("../controllers/userControllers") 
const router = Router();

router.post('/register', registerUser)
router.post('/loin', loginUser)
router.get('/:id', getUser)
router.get('/', getAuthors)
router.post('/change-avatar', changeAvatar)
router.post('/edit-user', editUser)


module.exports = router;