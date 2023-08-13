'use strict'
const express = require("express");
const serverless = require("serverless-http");

const path = require("path");

const app = express();
const router = express.Router();

const PORT = 3000;


app.use(express.static(path.join(__dirname,"../dist")))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "../dist"));
app.set("view engine", "ejs");

// main
app.get("/", (req, res) => {
    res.render('index');
});

app.use("./netlify/functions/api", router)
module.exports.handler = serverless(app)