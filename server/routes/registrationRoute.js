const User = require("../models/user");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = 5;
const mailer = require("../nodemailer");
const { v4: uuidv4 } = require("uuid");

router.route("/").post(async (req, res) => {
  try {
    const { email, password } = req.body.values;
    const hashPassword = await bcrypt.hash(password, salt);
    if (email && password) {
      const user = await User.create({
        email,
        password: hashPassword,
        regDate: Date.now(),
        profileId: uuidv4(),
      });
      res.locals.user = user;
      console.log(res.locals);

      res.json(user);

      const message = {
        to: email,
        subject:
          "Congratulatiions! You are successfully registred on our site!",
        text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте Hello Neighbour!

        Данное письмо не требует ответа.`,
      };
      // mailer(message);
    }
  } catch (error) {
    console.log(error);
  }
});

router.route("/google").post(async (req, res) => {
  const { email } = req.body;
  const googleUser = await User.findOne({ email });
  if (googleUser == null) {
    const user = await User.create({
      email,
      regDate: Date.now(),
      profileId: num,
    });
    res.json(user);
  } else {
    res.json(googleUser);
  }
});

module.exports = router;

