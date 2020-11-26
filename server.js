if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once('open', ()=> console.log("Connected to DB!"));

app.use("/", indexRouter);

app.listen(3000);