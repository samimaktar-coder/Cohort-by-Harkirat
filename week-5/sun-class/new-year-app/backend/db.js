const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.nqf3ldv.mongodb.net/todos-app');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    Todo
};