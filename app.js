require("dotenv").config();
const express = require("express");
const router = require("./routes/bamboog.routes");
const ejs = require("ejs");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.redirect("src/views/index")
});

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.static(__dirname + "/public"));

app.use("/ap1/v1/user", router);

app.use((req, res, next) => {
    const error = new Error("Not Found" + "😢😢😢😢😢😢😢");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.json({
      error: {
        message: error.message + "🔥🔥🔥🔥🔥🔥🔥🔥🔥",
      },
    });
  });
  
  module.exports = app;