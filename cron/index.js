const nodemailer = require('nodemailer');
const axios = require('axios');
var CronJob = require('cron').CronJob;
var job = new CronJob('30 * * * * *', async function() {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.PASS_EMAIL
            }
        });

        try {

            var usersFollowData = await axios.get(`${process.env.SERVER_LARAVEL}/usersFollows?include=products`);
            usersFollowData.data.data.map(user => {
                var prodString = 'Danh sach san phan dang theo doi: \n';
                user.products.data.map(prod => {
                    prodString += `${prod.nameProduct} -  ${prod.price} \n`;
                })
    
    
                let mailOption = {
                    from: '"Price Comparison CTU" <price.comparison.ctu@noreply.com> ',
                    bcc: user.emailUser,
                    subject: 'Su dung Node.js gui nhieu email',
                    text: prodString,
                };
                transporter.sendMail(mailOption, (error, info) => {
                        if(error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                });
            })
        } catch(err) {
            console.log(err)
        }

        }, null, true, 'Asia/Ho_Chi_Minh');

module.exports = job;