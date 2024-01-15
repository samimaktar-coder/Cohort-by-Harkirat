const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/calculate', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    let ans = parseInt(a) + parseInt(b);
    console.log(ans.toString());
    res.send(ans.toString());
});


app.listen(1234);