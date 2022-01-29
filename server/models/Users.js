const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Users = new mongoose.Schema({
    email :{ type: String, required: true},
    name :{ type: String, required: true},
    password :{ type: String, required: true},

}, { timestamps: true });


Users.pre("save", async function (next) {
    const user = this;
    try {
      if (!user.isModified("password")) next();
      let hash = await bcrypt.hash(user.password, 13);
      user.password = hash;
      next();
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

Users.methods.comparePassword = async function (password) {
    try {
        let result = await bcrypt.compare(password, this.password);
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
};

module.exports = mongoose.model('users', Users);