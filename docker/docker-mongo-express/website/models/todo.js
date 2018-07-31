const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const VoteSchema = new  Schema({
    task: String
})

// Create collection and Add scheama

const Todo = mongoose.model('Todo', VoteSchema);

module.exports = Todo;
