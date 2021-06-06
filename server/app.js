const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/hello";
const WebSocket = require('ws');
const User = require("./models/user");

const morgan = require("morgan");


const wss = new WebSocket.Server({ port: 8080 });


const app = express();
// const map = new Map();

// const server = http.createServer(app);
// const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

const registerRoute = require("./routes/registrationRoute");
const eventRoute = require("./routes/eventRoute")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))



wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('Shama hi');
  });
});

app.use("/registration", registerRoute);
app.use("/event",eventRoute)
app.use('/allEvent',eventRoute)

app.listen(3001, () => {
  console.log("Go retard");
  connect(
    mongoUrl,
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
