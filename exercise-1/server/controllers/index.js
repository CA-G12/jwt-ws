"use strict";

const jwt = require("jsonwebtoken");

const router = require("express").Router();

const error = require("./error");

// Write your code here

router.use(error.client);
router.use(error.server);

module.exports = router;
