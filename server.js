const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const app = express();
app.use(cors());

// Get routes
const authRoutes = require('./routes/auth');
const requestRoutes = require('./routes/request');

// Initialize middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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