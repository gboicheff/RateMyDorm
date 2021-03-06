const User = require("../models/Users");

const login = (req, res) => {
    // console.log("llksdafl;kjasd;kjlfasd;kjlsd;fjklsa")
    // res.redirect(307, '/')
    // console.log("111111111111111111111111111")
    // return
    return res.status(200).json({ msg: "user sucessfully logged in" });
};

const signup = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      let newUser = new User({ name, email, password });
      await newUser.save();
      return res.status(200).json({ msg: "user successfully created" });
    }
    return res
      .status(422)
      .json({ errors: ["the user with this email already exists"] });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ errors: ["some error occured"] });
  }
};

const logout = (req, res) => {
  req.logout();
  res.redirect("/")
};

const account = (req, res) => {
  if (!req.user)
    return res.status(403).json({ errors: ["login to get the info"] });

  return res.status(200).json({ user: req.user });
};

module.exports = {
  login,
  signup,
  logout,
  account,
};