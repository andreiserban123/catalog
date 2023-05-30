import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import oracledb from "oracledb";

// @desc    auth user /set token
// route    POST /api/users/auth
// @access  PUBLIC
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc    login user
// route    POST /api/users/login
// @access  PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const connection = await oracledb.getConnection();
  const query = `SELECT * FROM SIT_USER WHERE EMAIL = :email AND PASSWORD = SIT_UTILS_PKG.ENCRYPT_PASSWORD(:password)`;
  const result = await connection.execute(query, { email, password });
  await connection.close();
  if (result.rows.length === 0) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  res.status(200).json({ message: "login User" });
});

// @desc    logout user
// route    POST /api/users/logout
// @access  PUBLIC
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "LogoutUser User" });
});

// @desc    get profile user
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// @desc    Update profile user
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export { loginUser, authUser, logoutUser, getUserProfile, updateUserProfile };
