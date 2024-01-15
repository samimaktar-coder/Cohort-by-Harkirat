const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.nqf3ldv.mongodb.net/userappnew");

const User = mongoose.model("Users", {
    name: String,
    email: String,
    password: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
    // should check in the database
}

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
        return res.status(400).send("Username already exists.");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });

    user.save();
    res.status(200).json({ msg: 'User created successfully.' });
});

app.listen(1234);