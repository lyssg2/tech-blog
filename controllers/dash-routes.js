const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require('../utils/auth');

// All user posts displayed on dashboard
router.get('/', withAuth, async(req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
            where: { 'user_id': req.session.user_id },
        });

        // Serializes data to pass through template
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts', {
            layout: 'dashboard',
            posts
        });
    } catch (err) {
        res.redirect('login');
    }
})

// When new post button is clicked, directs to new post with the dashboard layout
router.get('/new-post', withAuth, async(req, res) => {
    res.render('new-post', {
        layout: 'dashboard'
    })
})

// When post is clicked, edit view is passed through template
router.get('/edit/:id', withAuth, async(req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('edit-post', {
                layout: 'dashboard',
                post
            });
        } else {
            res.status(404).end();
        };
    } catch (err) {
        res.redirect('login');
    }
})


module.exports = router;