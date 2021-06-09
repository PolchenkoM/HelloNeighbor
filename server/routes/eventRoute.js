const Event = require("../models/event");
const router = require("express").Router();
// const { isPointWithinRadius } = require("geolib");
const geolib = require("geolib");

router.route("/").get(async (req, res) => {
  try {
    const allEvens = await Event.find().populate("tags");
    res.json(allEvens);
  } catch (e) {
    console.log(e);
  }
});

router.route("/").post(async (req, res) => {
  try {
    const newEvent = await Event.create({
      coordinates: {
        x: req.body.x,
        y: req.body.y,
      },
    });
    res.json(newEvent);
  } catch (e) {
    console.log(e);
  }
});

router.route("/").put(async (req, res) => {
  const allEvens = await Event.find();
    console.log('allEvens',allEvens);
    const isWithinRange =  allEvens.filter(event => {
      return geolib.isPointWithinRadius(
        {latitude: event.coordinates.x , longitude: event.coordinates.y},
        { latitude: 55.678652, longitude: 37.7478465 },
        500
      );
    });
    
    console.log("geoliiiiib",isWithinRange);
});

module.exports = router;
