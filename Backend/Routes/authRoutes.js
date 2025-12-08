const express = require("express");
const passport = require("passport");
const router = express.Router();
const { registerUser, loginUser } = require("../Controller/authController");
const jwt = require("jsonwebtoken");

// Local auth
router.post("/register", registerUser);
router.post("/login", loginUser);

// Google auth route

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "Google Authentication Successful",
      token: token,
      user: {
        _id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        profilePic: req.user.profilePic,
      },
    });
  }
);

// Facebook Auth route

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({
      success: true,
      message: "Authentication successful",
      token: token,
      user: req.user,
    });
  }
);

module.exports = router;
