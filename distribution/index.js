'use strict';

var nodemailer = require('nodemailer');
var axios = require('axios');
var CronJob = require('cron').CronJob;
var job = new CronJob('30 * * * * *', function () {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'price.comparison.ctu@gmail.com',
            pass: 'CTU@2020'
        }
    });
    var host = 'http://127.0.0.1';
    var port = '3000';
    axios.get(host + ':' + port + '/emails').then(function (jsonObject) {
        console.log('' + jsonObject.data);
        var mailOption = {
            from: '"Price Comparison CTU" <price.comparison.ctu@noreply.com> ',
            to: jsonObject.data,
            subject: 'Su dung Node.js gui nhieu email',
            text: 'Xin chaoooooooooooooooooooooo, tui la Huu Hieu!'
        };
        transporter.sendMail(mailOption, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }).catch(function (error) {
        return console.log(error);
    });
}, null, true, 'Asia/Ho_Chi_Minh');
job.start();