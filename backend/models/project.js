'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    langs: String,
    year: Number,
    image:  String
});

module.exports = mongoose.model('Project', ProjectSchema);