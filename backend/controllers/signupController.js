import bcrypt from 'bcrypt';
import userModel from '../models/UserModel.js';

// Signup Controller
const signupController = async (req, res) => {
  const { email, password, username, mobileNumber } = req.body;

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new instance of userModel, with password as hashedPassword
    const newUser = new userModel({
      email,
      password: hashedPassword,
      username,
      mobileNumber,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default signupController;
