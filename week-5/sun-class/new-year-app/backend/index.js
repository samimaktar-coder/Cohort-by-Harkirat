const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./type');
const { Todo } = require('./db');

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({ msg: 'You sent the wrong inputs.' });
        return;
    }

    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: 'Todo created'
    });

});

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({});
    res.json({ todos });
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({ msg: 'You sent the wrong inputs.' });
        return;
    }

    await Todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });

    res.json({
        msg: "Todo marked as completed."
    });

});


app.listen(3000);