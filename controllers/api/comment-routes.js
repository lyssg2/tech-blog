const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/', withAuth, async(req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [User],
            where: { 'user_id': req.session.user_id },
        })

        // Serializes data to pass through template
        const comments = commentData.map((comment) => comment.get({ plain: true }))

        res.render('all-comments', {
            comments,
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

// Post comment
router.post('/', withAuth, async(req, res) => {
    try {
        const newComment = await Comment.create({
            ...body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});