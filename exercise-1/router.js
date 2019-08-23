"use strict";

const path = require("path");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = router;
