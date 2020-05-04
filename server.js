const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
//const cronjob = require("./cron");
require('dotenv').config();

const app = express();
//cronjob.start();

// Apply middleware
app.use(express.static("client/build"));
app.use(bodyParser.json())
app.use(cors());

app.post("/users/verify", (req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASS_EMAIL
        }
    });

    let mailOption = {
        from: '"Price Comparison CTU" <price.comparison.ctu@noreply.com> ',
        to: req.body.email,
        subject: 'Verify your account',
        html: `Verify link: ${process.env.SERVER}/me/verify/${req.body.token} `
    };
    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send("success")
        }
    });
})

// Production
if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listen on port " + PORT);
});