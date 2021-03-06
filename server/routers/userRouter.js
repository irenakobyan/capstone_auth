const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req,res) => {
  try{
    const {email, password, passwordVerify} = req.body;

    //validation

    if(!email || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Enter all required fields"});

    if(password.length < 6)
    return res
      .status(400)
      .json({ errorMessage: "Please enter password of at least 6 characters"});

    if(password !== passwordVerify)
    return res
      .status(400)
      .json({ errorMessage: "Please enter the password twice"});

    const existingUser = await User.findOne({email})
    if(existingUser)
    return res
      .status(400)
      .json({ errorMessage: "Account with this email already exists"});

    //hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //save a new user account to the database

    const newUser = new User({
      email, passwordHash
    });

    const savedUser = await newUser.save();

    //log the user
    const token = jwt.sign({
      user:savedUser._id
    }, process.env.JWT_SECRET);

    //send HTTP cookie
    res
    .cookie("token", token,{
      httpOnly: true
    })
    .send();

  } catch(err) {
    console.error(err);
    res.status(500).send();
  }
});

//log in

router.post("/login", async(req,res)=> {
  try{
    const {email, password} = req.body;

    //validation
    if(!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Enter all required fields"});

    const existingUser = await User.findOne({email});
    if(!existingUser)
    return res
      .status(401)
      .json({ errorMessage: "Wrong email or password"});

    const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
    if(!passwordCorrect)
    return res
      .status(401)
      .json({ errorMessage: "Wrong email or password"});

  }
  catch(err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0)
  })
  .send();
});

module.exports = router;
