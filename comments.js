// Create web server 

// Import modules
const express = require('express');
const router = express.Router();

// Import controllers
const { 
    createComment, 
    getComments, 
    getCommentById, 
    updateComment, 
    deleteComment 
} = require('../controllers/comments');

// Import middleware
const { protect, authorize } = require('../middleware/auth');

// Routes
router
    .route('/')
    .get(getComments)
    .post(protect, authorize('user', 'admin'), createComment);

router
    .route('/:id')
    .get(getCommentById)
    .put(protect, authorize('user', 'admin'), updateComment)
    .delete(protect, authorize('user', 'admin'), deleteComment);

module.exports = router;