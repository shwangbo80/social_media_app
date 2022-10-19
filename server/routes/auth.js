const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register user
router.post("/register", async (req, res) => {
  try {
    //Generate new hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Generate new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //Save new user and send resopnse
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login user
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({email: req.body.email});
//     !user && res.status(404).json("User not found");

//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     !validPassword && res.status(400).json("Incorrect password");

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) {
      res.status(404).json(`User ${req.body.email} not found`);
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(400).json(`Incorrect password for ${req.body.email}`);
      return;
    }

    res.status(200).json(`User ${req.body.email} successfully logged in`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
