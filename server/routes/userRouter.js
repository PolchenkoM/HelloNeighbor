const router = require("express").Router();
const express = require("express");
const Users = require("../models/user");
const multer = require("multer");
const { nanoid } = require("nanoid");
const User = require("../models/user");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/avatars`);
  },
  filename: function (req, file, cb) {
    const extension = "." + file.originalname.split(".")[1];
    const currentUserAvaName = nanoid(10);
    cb(null, currentUserAvaName + extension);
  },
});

const upload = multer({ storage });

// router.route("/addAvatar")
//   .post(upload.single("avatar"), async(req, res) => {
//     try {
//       const userId = req.body.id
//       const userAvatarPath = req.file.path
//       const user = await Users.create({
//         username: 'www',
//         password: '111',
//         email: 'asd@asd.com',
//         avatar: req.file.path,
//       })
//       await user.save()
//       res.send(user)
//     } catch (error) {
//       console.log(error);
//     }
//   })


router.route("/getCurrentUser").post(async (req, res) => {
  console.log(req.body.id);
  try {
  } catch (error) {
    console.log(error);
  }
});

router.post("/profile", async (req, res) => {
  
  const { name, age, gender, tags, aboutSelf, address, email } = req.body;
  const { avatar } = req.file.path;

  if (name & age & gender & tags & aboutSelf & avatar & address) {
    const user = await User.findOneAndUpdate(
      { email: email },
      {
        name: name,
        age: age,
        gender: gender,
        tags: tags,
        aboutSelf: aboutSelf,
        avatar: avatar,
        address: address,
      }
    );
    res.json(user);
  }
});

// router.route("/addAvatar")
//   .post(upload.single("avatar"), async(req, res) => {
//     try {
//       const userId = req.body.id
//       const userAvatarPath = req.file.path
//       const user = await Users.create({
//         username: 'www',
//         password: '111',
//         email: 'asd@asd.com',
//         avatar: req.file.path,
//       })
//       await user.save()
//       res.send(user)
//     } catch (error) {
//       console.log(error);
//     }
//   })

  router.route('/getCurrentUser')
    .post(async (req,res) => {
      console.log(req.body.id);
      try {

      } catch (error) {
        console.log(error)
      }

    })



module.exports = router;
