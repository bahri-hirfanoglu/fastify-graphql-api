const userController = require('../controllers/userController')
const postController = require('../controllers/postController')
const commentConroller = require('../controllers/commentController')

const routes = [
    /* USER */
    {
        method: 'GET',
        url: '/users',
        handler: userController.getUsers
    },
    {
        method: 'GET',
        url: '/user/:id',
        handler: userController.getUser
    },
    {
        method: 'POST',
        url: '/user',
        handler: userController.addUser
    },
    {
        method: 'PUT',
        url: '/user',
        handler: userController.updateUser
    },
    {
        method: 'DELETE',
        url: '/user',
        handler: userController.deleteUser
    },
    /* POST */
    {
        method: 'GET',
        url: '/posts',
        handler: postController.getPosts
    },
    {
        method: 'GET',
        url: '/post/:id',
        handler: postController.getPost
    },
    {
        method: 'GET',
        url: '/post/user/:id',
        handler: postController.getUserPosts
    },
    {
        method: 'POST',
        url: '/post',
        handler: postController.addPost
    },
    {
        method: 'PUT',
        url: '/post',
        handler: postController.updatePost
    },
    {
        method: 'DELETE',
        url: '/post',
        handler: postController.deletePost
    },
    /* COMMENT */
    {
        method: 'GET',
        url: '/comment/:id',
        handler: commentConroller.getComment
    },
    {
        method: 'GET',
        url: '/comment/post/:id',
        handler: commentConroller.getPostComment
    },
    {
        method: 'DELETE',
        url: '/comment/:id',
        handler: commentConroller.deleteComment
    }
]
module.exports = routes
