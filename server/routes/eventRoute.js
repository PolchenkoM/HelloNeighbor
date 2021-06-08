const Event = require("../models/event");
const router = require("express").Router();

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

router.route("/").put(async (req, res) =>{
  
})

module.exports = router;
