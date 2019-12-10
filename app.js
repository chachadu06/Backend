const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/database.config');
const app = express();


// on se connecte à la base de données

 mongoose.Promise = global.Promise;
const dbName = "DashboardProject";
const dbURL = `mongodb://localhost:27017/${dbName}`;
// on se connecte à la base de données
mongoose.connect(dbURL, {
    useNewUrlParser: true
    }); 






const usersRouter = require("./routes/user");
const sensorsRouter = require("./routes/sensor");
const measuresRouter = require("./routes/mesure");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/users", usersRouter);
app.use("/sensors", sensorsRouter);
app.use("/measures", measuresRouter);

module.exports = app;