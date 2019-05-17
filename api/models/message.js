'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = Schema({
    text: String,
});

var message = mongoose.model('Message', messageSchema);
module.exports = message;