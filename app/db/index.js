const mongoose = require("mongoose");

const config = require("../config");

mongoose.connect(config.DB_MONGOU_RL);

const db = mongoose.connection;

module.exports = db;
