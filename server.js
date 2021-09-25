const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
var cors = require('cors');


// Get routes
const authRoutes = require('./routes/auth');
const requestRoutes = require('./routes/request');

// Initialize middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use( cors() );
// app.use(function(req, res, next) {     res.header("Access-Control-Allow-Origin", "*");     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");     next(); });

// Initialize routes
app.use('/api/auth', authRoutes);
app.use('/api/request', requestRoutes);

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("MongoDB Connected...");
		app.listen(process.env.PORT, () => {
			console.log(`Server started on port ${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.error(err.message);
	});
