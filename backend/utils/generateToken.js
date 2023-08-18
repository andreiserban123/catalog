import jwt from 'jsonwebtoken';

const generateToken = (res, userId, userRole) => {
  const payload = {
    userId,
    userRole,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.cookie('jwt', token, {
    path: '/',
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // merge in secunde (30 de zile in s)
  });
};

export default generateToken;
