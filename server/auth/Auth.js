
const express = require("express");
const passport = require("passport");
const { check, validationResult } = require("express-validator");

const { login, logout, signup, account } = require("./Controller");

const router = express.Router();

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("the name must have minimum length of 3")
      .trim(),

    check("email")
      .isEmail()
      .withMessage("invalid email address")
      .normalizeEmail(),

    check("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("your password should have min and max length between 8-15"),

    check("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("passwords do not match");
      }
      return true;
    }),
  ],
  (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    const hasError = !error.isEmpty();

    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }
  },
  signup
);


router.post(
  "/login",
  passport.authenticate("local", {
    failureMessage: "Invalid username or password",
  }),
  login
);


router.get("/logout", logout);


router.get("/account", account);

module.exports = router;