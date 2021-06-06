const router = require("express").Router();
const express = require('express')
const Users = require("../models/user");
const multer = require('multer')
const { nanoid } = require("nanoid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/avatars`)
  },
  filename: function(req, file, cb) {
    const extension = '.' + file.originalname.split('.')[1]
    const currentUserAvaName = nanoid(10)
    cb(null, currentUserAvaName + extension)
  }
})

const upload = multer({ storage })

router.route("/addAvatar")
  .post(upload.single("avatar"), async(req, res) => {
    try {
      const userId = req.body.id
      const userAvatarPath = req.file.path
      const user = await Users.create({
        username: 'www',
        password: '111',
        email: 'asd@asd.com',
        avatar: req.file.path,
      })
      await user.save()
      res.send(user)
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const user = await User.create({
    //     username: userId,
    //     password: userId,
    //     email: userId,
    //     _id: userId,
    //     avatar: userAvatarPath
    //   })
    //   user.avatar = userAvatarPath
    //   user.save()
    //   return res.send(user)
    // } catch (error) {
    //   console.log(error);
    // }
  });

module.exports = router;
