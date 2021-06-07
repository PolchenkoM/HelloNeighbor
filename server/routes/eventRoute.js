const Event = require('../models/eventModel')
const router = require("express").Router();

router.route("/").get(async (req, res) =>{
  try {
    const allEvens =await Event.find()
    res.json(allEvens)
  } catch (e) {
    console.log(e);
  }
})

router.route("/").post(async (req, res) =>{
  console.log( 'server',req.body);
  try {
    const newEvent =await Event.create({
      coordinates:
      {
        x:req.body.x, 
        y:req.body.y
      }})
    res.json(newEvent)
  } catch (e) {
    console.log(e);
  }
})

module.exports = router;
