require("dotenv").config();
var express = require("express");
var app = express();
var serverless = require("serverless-http");
var mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

var globalRouter = express.Router();

app.use("/.netlify/functions/app", globalRouter);

module.exports.handler = serverless(app);
