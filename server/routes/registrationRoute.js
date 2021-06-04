const User = require("../models/user");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = 5;

router.route("/").post(async (req, res) => {
  try {
    console.log(req.body.values);
    const { username, email, password } = req.body.values;
    const hashPassword = await bcrypt.hash(password, salt);
    if (username && email && password) {
      const user = await User.create({
        username,
        email,
        password: hashPassword,
      });
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
