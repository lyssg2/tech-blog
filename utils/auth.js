const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        // Call next() if the user is authenticated
        next();
    }
};

module.exports = withAuth;