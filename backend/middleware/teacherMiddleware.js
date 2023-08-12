import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

// here we verify if the user has user role = 1 which means he is a teacher

const protectTeacher = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  console.log(token);
  if (token) {
    try {
      console.log('inside token');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (req.user.userRole !== 1) {
        res.status(401);
        throw new Error('Not authorized, invalid token');
      }
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, invalid token');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { protectTeacher };
