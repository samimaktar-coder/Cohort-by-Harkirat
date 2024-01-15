const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1234;

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body.namef);
    res.send('<h1>Hello World!</h1>');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});