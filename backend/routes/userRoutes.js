import express from "express";
const router = express.Router();
import {
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../cotrollers/userController.js";

router.post("/", loginUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
