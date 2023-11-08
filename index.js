const express = require("express");
const app = express();
const port = 1720;
const mongoose = require("mongoose");

//connecting to database
mongoose.connect(
  "mongodb+srv://okontapaulo1:oladunjoye84@cluster0.6vrabzy.mongodb.net/"
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database successfully"));

//configuring server to accept json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

const paulRouter = require("./routes/users.js");
app.use(paulRouter);

app.listen(port, () => {
  console.log("server working successfully");
});
