const mongoose = require('mongoose');
const PonitSchema = require('./utils/PointSchema');
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PonitSchema,
        indexes: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);