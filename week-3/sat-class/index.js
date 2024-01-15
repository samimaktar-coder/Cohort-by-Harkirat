const express = require('express');
const app = express();




// app.get('/health-checkup', (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username !== 'samim' || password !== 'pass') {
//         res.status(400).json({ msg: 'Something up with your headers' });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({ msg: 'Something up with your inputs' });
//         return;

//     }
//     res.status(200).json({ msg: 'Your kidney is fine.!' });
// });

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    console.log('Inside userMiddleware');
    if (username !== 'samim' || password !== 'pass') {
        res.status(403).json({ msg: 'Something up with your headers' });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    console.log('Inside kidneyMiddleware');
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({ msg: 'Something up with your inputs' });
    } else {
        next();
    }
}

//app.use(userMiddleware, kidneyMiddleware); //! If you give middleware in this way, it will use those middleware in every methods

app.get('/health-checkup', userMiddleware, (req, res) => {
    res.status(200).json({ msg: 'Your are totally fine.' });
});

app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
    res.status(200).json({ msg: 'Your kidneys are totally fine.' });
});

app.get('/heart-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
    res.status(200).json({ msg: 'Your heart is totally fine.' });
});


app.listen(1234);