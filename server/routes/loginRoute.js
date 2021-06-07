const User = require("../models/user");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.route("/").post(async (req, res) => {
  const { email, password } = req.body.values;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.locals.user = user;
    res.json(user);
  }
});

module.exports = router;
