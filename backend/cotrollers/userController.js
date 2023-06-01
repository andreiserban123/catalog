import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import oracledb from "oracledb";

// @desc    login user
// route    POST /api/users/login
// @access  PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const connection = await oracledb.getConnection();
  const query = `SELECT * FROM SIT_USER WHERE EMAIL = :email AND PASSWORD = SIT_UTILS_PKG.ENCRYPT_PASSWORD(:password)`;
  const result = await connection.execute(query, { email, password });
  if (result.rows.length > 0) {
    const user = result.rows[0];
    // console.log(user[0]); // id
    const userID = user[0];
    const query = `SELECT ID FROM SIT_USER_ROLES WHERE ID_user = :userID`;
    const result2 = await connection.execute(query, { userID });
    const id_user_roles = result2.rows[0][0];
    generateToken(res, id_user_roles);
    res.status(200).json({
      id: id_user_roles,
      email: user[2],
    });
    await connection.close();
  } else {
    await connection.close();
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    logout user
// route    POST /api/users/logout
// @access  PUBLIC
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User Logout with success" });
});

// @desc    get profile user
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  res.status(200).json({ message: "User Profile" });
});

// @desc    Update profile user
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export { loginUser, logoutUser, getUserProfile, updateUserProfile };
