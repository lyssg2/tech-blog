const router = require('express').Router();
const { User } = require('../../models');

// Sign up post route
router.post('/', async(req, res) => {

    console.log('Signup Post Route smacked')

    try {
        const userData = await User.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        })
        console.log('User Created', userData)

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json(userData)
        })


    } catch (err) {
        res.status(400).json(err);
    }
})

// Login post route
router.post('/login', async(req, res) => {
    console.log("Caling the login route ", req.body);
    try {
        // DB query to find username
        const userData = await User.findOne({ where: { username: req.body.username } });
        console.log("user exists ", userData);
        if (!userData) {
            res
                .status(400)
                .json({ message: 'No account found! Please try again' });
            return;
        }

        // Checking password for validation
        const validPassword = userData.checkPassword(req.body.password);
        console.log("Valid password", validPassword);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Success! You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// Logout post route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;