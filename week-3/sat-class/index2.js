const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    // const keidneyLength = kidneys.length;
    if (!response.success) {
        res.status(411).json(response);
    } else {
        res.status(200).send("You have " + kidneys.length + " kidneys");
    }

});

//! global catches
// app.use((err, req, res, next) => {
//     res.json({ msg: "Something went wrong with our server" });
// });

app.listen(1234);