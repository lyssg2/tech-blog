const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require('../utils/auth');

// Get all posts to view on homepage
router.get('/', async(req, res) => {
    try {
        // Get all posts from user
        const postData = await Post.findAll({
            include: [{
                model: User,
                attributes: ['username']
            }, ],
        })

        // Serialize data for template to read
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('all-posts', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get single post using withAuth to prevent access to route if not logged in
router.get('/post/:id', withAuth, async(req, res) => {
    try {
        // Find the logged in user based on the session ID
        const postData = await Post.findByPk(req.params.user_id, {
            include: [{
                model: User,
                attributes: ['name'],
            }],
        })

        const post = postData.get({ plain: true })

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard')
        return;
    }
    res.render('login')
});

// Get signup page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
});

// If the user is already logged in, redirect the request to the homepage
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;