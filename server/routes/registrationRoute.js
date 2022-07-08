const User = require("../models/user");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = 5;
const mailer = require("../nodemailer");
const { v4: uuidv4 } = require("uuid");

router.route("/").post(async (req, res) => {
  try {
    const { email, password } = req.body.values;
    if (email && password) {
      const hashPassword = await bcrypt.hash(password, salt);
      const user = await User.create({
        email,
        password: hashPassword,
        regDate: Date.now(),
        profileId: uuidv4(),
      });
      res.locals.user = user;
      res.json(user);

      const message = {
        to: email,
        subject:
          "Congratulatiions! You are successfully registred on our site!",
        text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте Hello Neighbour!!!!!!!
        <a href='http://localhost:3000/'>тут ссылка для окончания регистрации</a>
Данное письмо не требует ответа.`,
      };
      mailer(message);
    }
  } catch (error) {
    console.log(error);
  }
});

router.route("/google").post(async (req, res) => {
  const { email } = req.body;
  const googleUser = await User.findOne({ email })
    .populate({
      path: "history",
      populate: ["tags", "members"],
    })
    .populate("tags")
    .populate("friends");
  if (googleUser == null) {
    const user = await User.create({
      email,
      regDate: Date.now(),
      profileId: uuidv4(),
    });

    res.locals.user = user;
    res.json(user);
  } else {
    res.locals.user = googleUser;
    res.json(googleUser);
  }
});

module.exports = router;
