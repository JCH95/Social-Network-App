const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../..controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .get(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friend/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;