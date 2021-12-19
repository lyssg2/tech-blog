const { User } = require('../models');

const userData = [{
        name: 'Biggs',
        username: 'biggsykitty',
        password: 'iamacat',
        email: 'biggs2@gmail.com'
    },
    {
        name: 'Biggs',
        username: 'lunagrande',
        password: 'fuzzy22',
        email: 'lunagrande2@gmail.com'
    },
    {
        name: 'Mochi',
        username: 'doxie2',
        password: 'matcha2',
        email: 'mochi2@gmail.com'
    },
    {
        name: 'MJ',
        username: 'maryjane',
        password: 'redblanket2',
        email: 'maryjane2@gmail.com'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;