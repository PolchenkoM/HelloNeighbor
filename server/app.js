const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/hello";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



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
