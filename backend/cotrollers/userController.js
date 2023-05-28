import asyncHandler from "express-async-handler";

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
