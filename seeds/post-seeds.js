const { Post } = require('../models');

const postData = [{
        title: 'Password Generator Refactor',
        content: 'The purpose of this project was to make a password generator that creates random, strong passwords that provide greater security, based off of criteria that the user selects.',
        user_id: 1
    },
    {
        title: 'Work day scheduler released',
        content: "The purpose of this project was to make a website where the user can make a daily work schedule. The website is responsive and displays today's date, as well as indicates the past, current and present hour by color.",
        user_id: 2
    },
    {
        title: 'Employee Tracker downloaded 100 times!',
        content: 'The purpose of this project was to create a command line interface (CLI) that allows a company to manage their employee database seemlessly using Inquirer, console.table, Node.js, and MySQL.',
        user_id: 3
    },
    {
        title: 'Cocktail Hour reaches 1 million subscribers!',
        content: 'The purpose of this project is to help out the fellow cocktail lover and newbie mixer alike find cocktail recipes in a pinch. Using the CocktailDB API and Pixabay API, the user is given recipes and instructions of how to make cocktails, accompanied with a pretty picture for reference.',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;