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

router.route('/addAvatar').post(upload.single('avatar'), async (req, res) => {
	try {
		const { name, address, age, gender, id } = JSON.parse(req.body.profile)
		const tags = JSON.parse(req.body.profile).tags
		console.log('tags', tags)
		const userAvatarPath = req.file.path
		const updateProfileUser = await User.findByIdAndUpdate(
			{ _id: id },
			{
				name: name,
				address: address,
				age: age,
				gender: gender,
				tags: tags,
				avatar: userAvatarPath,
			}
		)
		res.json(updateProfileUser).status(200)
	} catch (error) {
		console.log(error)
	}
})


module.exports = router;
