const mongoose = require('mongoose');
// if you want to change the database
const URI = 'mongodb://localhost/three-in-line'


mongoose.connect(URI)
    .then(db => console.log('db is conected'))
    .catch(err => console.error(err))

module.exports = mongoose