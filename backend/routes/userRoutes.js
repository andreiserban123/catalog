import express from 'express';
const router = express.Router();
import {
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getTeachersRoute,
} from '../cotrollers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { protectTeacher } from '../middleware/teacherMiddleware.js';

router.post('/', loginUser);
router.post('/logout', protect, logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.get('/teachersroute', protectTeacher, getTeachersRoute);

export default router;
