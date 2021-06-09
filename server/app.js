const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const formData = require("express-form-data");
const path = require("path");
const PORT = 3001;
const mongoUrl = "mongodb://localhost:27017/hello";
const atlasUrl =
  "mongodb+srv://userMaxim:maxim123@cluster0.cwgwa.mongodb.net/HelloNeighbor?retryWrites=true&w=majority";
const WebSocket = require("ws");
const Tag = require("./models/tag");
const Event = require("./models/event");
const User = require("./models/user");

const morgan = require("morgan");

const wss = new WebSocket.Server({ port: 8080 });

const app = express();

// const map = new Map();

// const server = http.createServer(app);
// const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

const registerRoute = require("./routes/registrationRoute");
const eventRoute = require("./routes/eventRoute");
const userRouter = require("./routes/userRouter");
const loginRoute = require("./routes/loginRoute");

app.use(cors());
app.use(express.static(__dirname));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
    ws.send("Shama hi");
  });
});

app.use("/registration", registerRoute);
app.use("/event", eventRoute);
app.use("/user", userRouter);
app.use("/login", loginRoute);

app.get("/tags", async (req, res) => {
  const tags = await Tag.find();
  res.json(tags);
});

app.post("/matchEvent", async (req, res) => {
  const user = await User.findOne({ email: req.body.author });
  const currentEvent = await Event.findByIdAndUpdate(req.body.id, {
    $push: { members: user._id },
  });
});

app.post("/eventAuthor", async (req, res) => {
  const user = await User.findOne({ name: req.body.author }).populate("tags");
  res.json(user);
});

app.post("/createEvent", async (req, res) => {
  const event = await Event.findById(req.body.eventId);
  const user = await User.findOneAndUpdate(
    { email: req.body.author },
    { $push: { history: event._id } }
  ).populate("history");

  const tags = [];
  req.body.selectedTags.forEach((el) => tags.push(el._id));

  const currentEvent = await Event.findByIdAndUpdate(
    event._id,
    {
      title: req.body.values.title,
      description: req.body.values.description,
      eventTime: req.body.values.eventTime,
      regDate: Date.now(),
      authorId: user._id,
      author: user.name,
      tags: tags,
    },
    { new: true }
  ).populate("tags");
  res.json(currentEvent);
});

app.post("/delEvent", async (req, res) => {
  const delEvent = await Event.findByIdAndDelete(req.body.eventId._id);
  res.json(delEvent);
});

app.post("/addFriend", async (req, res) => {
  const author = await User.findOne({ name: req.body.author });
  const user = await User.findOneAndUpdate(
    { email: req.body.me },
    { $push: { friends: author._id } }
  );
  const anotherUser = await User.findOneAndUpdate(
    { name: req.body.author },
    {
      $push: {
        friends: user._id,
      },
    }
  );
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Go retard on ${PORT} port`);
  connect(
    atlasUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    },
    () => {
      console.log("База зазазаз");
    }
  );
});
