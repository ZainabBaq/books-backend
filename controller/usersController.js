const { User } = require("../db/models");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
  const { password } = req.body;
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    res.status(201).json({ message: "user created" });
  } catch (error) {
    next(error);
  }
};