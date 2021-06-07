const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "hello_neighbour@mail.ru",
      pass: "maxpidr228",
    },
  },
  {
    from: "Hello Neighbour Support <hello_neighbour@mail.ru>",
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("email sent", info);
    }
  });
};



module.exports = mailer;
