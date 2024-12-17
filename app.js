var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const categoriesRouter = require("./app/api/v1/categories/router");
const notFoundMiddleware = require("./app/middlewares/handler-error");
const handlerErrorMiddleware = require("./app/middlewares/handler-error");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/categories", categoriesRouter);

app.use(notFoundMiddleware);
app.use(handlerErrorMiddleware);



module.exports = app;
