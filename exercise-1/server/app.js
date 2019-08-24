"use strict";

const express = require("express");

const router = require("./controllers");

const app = express();

app.set("port", 3000);

app.use(router);

module.exports = app;
