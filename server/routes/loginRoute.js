const User = require("../models/user");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.route("/").post(async (req, res) => {
  console.log('req.body',req.body);
  const { email, password } = req.body.values;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
<<<<<<< HEAD

    res.locals.user = user
    console.log('user====>>>>', res.locals.user);
=======
    console.log('user',user);
>>>>>>> frontD
    res.json(user);
  }
});




module.exports = router;

