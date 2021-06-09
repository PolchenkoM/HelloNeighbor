const Event = require("../models/event")
const router = require("express").Router()
const geolib = require("geolib")
const User = require("../models/user")

router.route("/").get(async (req, res) => {
	try {
		const allEvens = await Event.find().populate("tags").populate("members").populate("authorId")
		res.json(allEvens)
	} catch (e) {
		console.log(e)
	}
})

router.route("/").post(async (req, res) => {
	console.log("reqbode", req.body)
	try {
		const newEvent = await Event.create({
			coordinates: {
				x: req.body.x,
				y: req.body.y
			}
		})
		console.log("newevent")
		res.json(newEvent)
	} catch (e) {
		console.log(e)
	}
})

router.route("/circle").post(async (req, res) => {
	const currentUser = await User.findById(req.body.currentUserId)
	const allEvens = await Event.find()
	const isWithinRange = allEvens.filter((event) => {
		return geolib.isPointWithinRadius(
			{ latitude: event.coordinates.x, longitude: event.coordinates.y },
			{ latitude: currentUser.coordinates.x, longitude: currentUser.coordinates.y },
			500
		)
	})

	res.json(isWithinRange)
})

module.exports = router
