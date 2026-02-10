import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "User not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid email | password" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error.message);
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await userModel.findOne({ email });
    if (exist) {
      res.json({ success: false, message: "user already exist" });
    }
    // email is valid
    if (!validator.isEmail(email)) {
      res.json({
        succcess: false,
        message: "Enter valid Email example@gmail.com",
      });
    }
    //password must 8 or more charcter
    if (password.length < 8) {
      res.json({ success: false, message: "Enter Strong Password " });
    }
    // hasing user password.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser,registerUser };
