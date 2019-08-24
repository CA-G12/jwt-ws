"use strict";

const path = require("path");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

const error = require("./error");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Write your code here

router.use(error.client);
router.use(error.server);

module.exports = router;
