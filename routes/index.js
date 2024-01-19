var express = require("express");
var router = express.Router();
const { DateTime } = require("luxon");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message Board" });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS),
  });
  res.redirect("/");
});

module.exports = router;
