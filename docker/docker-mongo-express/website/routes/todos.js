const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')
/* GET home page. */
router.get('/', function(req, res, next) {
    Todo.find({})
        .then(todos => console.log(todos))
        .catch(err => next(err));
});

router.post('/', function(req, res, next) {
    const todo = req.body;
    Todo.create(todo)
        .then(todo => res.send(201).send(todo))
        .catch(err => next(err));
        
});

router.delete('/:id', function(req, res, next) {
    
    Todo.findByIdAndRemove(req.params.id)
        .then(todo => res.send(todo))
        .catch(err => next(err));
        
});

module.exports = router;
