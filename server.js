const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// Get routes
const authRoutes = require('./routes/auth');
const requestRoutes = require('./routes/request');

// Initialize middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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