const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const { sendWelcomeEmail } = require("../utils/sendMail");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Login using jwt
    const payload = {
      user: {
        id: user.id,
        name: user.username,
      },
    };

    jwt.sign(
      payload,
      process.env.jwtSecret,
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token, user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.registerUser = async (req, res) => {
  const { username, email, password, password2 } = req.body;

  if (password !== password2) {
    return res.status(401).json({ msg: "Passwords do not match" });
  }

  try {
    const user = await User.findOne({ email });

    // Check if user already exists
    if (user) {
      return res.status(401).json({ msg: "User with email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Sign in using jwt
    const payload = {
      user: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.jwtSecret,
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) throw err;

        sendWelcomeEmail(email, username);
        res.status(200).json({ token, user: newUser });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.fetchUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};
