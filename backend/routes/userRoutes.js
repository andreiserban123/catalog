import express from 'express';
const router = express.Router();
import {
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../cotrollers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', loginUser);
router.post('/logout', protect, logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
