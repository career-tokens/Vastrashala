const UserModel = require("../models/User");

exports.getAllUsers = async () => {
  return await UserModel.find();
};

exports.createUser = async (user) => {
  return await UserModel.create(user);
};
exports.getUserById = async (id) => {
  return await UserModel.findById(id);
};

exports.updateUser = async (id, user) => {
  return await UserModel.findByIdAndUpdate(id, user);
};

exports.deleteUser = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};