import express from "express";
const router = express.Router();
import {
  loginUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../cotrollers/userController.js";

router.post("/", loginUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
