// @desc auth user /set token
// route POST /api/users/login
// @access PUBLIC
const loginUser = (req, res) => {
  res.status(200).json({ message: "login User" });
};

export { loginUser };
