const { Comment } = require('../models');

const commentData = [{
        user_id: 1,
        post_id: 1,
        comment_content: 'This is the future!'
    },
    {
        user_id: 2,
        post_id: 2,
        comment_content: 'Very efficient'
    },
    {
        user_id: 3,
        post_id: 3,
        comment_content: 'Congratulations, good work'
    },
    {
        user_id: 4,
        post_id: 4,
        comment_content: 'Props to the devs who put hard work on this!'
    },
];

const seedComments = () => Comment.bulkcreate(commentData);

module.exports = seedComments;