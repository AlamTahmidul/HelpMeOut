const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Initialize middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded());

