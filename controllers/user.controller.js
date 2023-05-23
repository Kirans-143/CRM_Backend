const User = require("../models/user.model");
const converUserObject = require("../utils/convertUserObject");

exports.findAll = async (req, res) => {
  try {
    let users = await User.find();
    if (users) {
      return res.status(200).send(converUserObject.userResponse(users));
    }
  } catch (err) {
    res.status(500).send({
      message: "Some internal error occured",
    });
  }
};

exports.findById = (req, res) => {};

exports.update = (req, res) => {};
