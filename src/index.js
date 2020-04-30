const nodemailer = require('nodemailer');
const axios = require('axios');
var CronJob = require('cron').CronJob;
var job = new CronJob('30 * * * * *', function() {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'price.comparison.ctu@gmail.com',
                pass: 'CTU@2020'
            }
        });
        var host = 'http://127.0.0.1';
        var port = '3000';
        axios.get(`${host}:${port}/emails`)
            .then((jsonObject) => {
                console.log(`${jsonObject.data}`);
                let mailOption = {
                    from: '"Price Comparison CTU" <price.comparison.ctu@noreply.com> ',
                    bcc: jsonObject.data,
                    subject: 'Su dung Node.js gui nhieu email',
                    text: 'Xin chaoooooooooooooooooooooo, tui la Huu Hieu!',
                };
                transporter.sendMail(mailOption, (error, info) => {
                        if(error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                });
            })
            .catch(error => console.log(error));
        }, null, true, 'Asia/Ho_Chi_Minh');
job.start();
