const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const crypto = require("crypto");

const api = require("./server/routes/api");
const auth = require("./server/routes/auth");
const jobs = require("./server/routes/jobs");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mydb", {
  useNewUrlParser: true,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(
  session({
    secret: crypto.randomBytes(16).toString("hex"),
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", api);
app.use("/", auth);
app.use("/jobs", jobs);

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const port = 8888;

app.listen(process.env.PORT || port, function () {
  console.log(`Runnin runnin and runnin runnin on port ${port}`);
});
