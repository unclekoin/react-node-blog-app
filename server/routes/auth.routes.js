const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const tokenService = require('../services/token.service');
const router = express.Router({ mergeParams: true });

/*
/api/auth/signUp
Register
1. get data from request (email, password, etc)
2. check if users exists
3. hash password
4. create user
5. generate tokens
*/
router.post('/signUp', [
  check('email', 'Incorrect email').isEmail(),
  check('password', 'Minimum password length 8 characters').isLength({ min: 8 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400,
            // errors: errors.array()
          }
        });
      }

      // 1. get data from request (email, password, etc)
      const { email, password } = req.body;

      // 2. check if users exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          error: {
            message: 'EMAIL_EXISTS',
            code: 400
          }
        });
      }

      // 3. hash password
      const hashPassword = await bcrypt.hash(password, 12);

      // 4. create user
      const newUser = await User.create({
        ...req.body,
        password: hashPassword
      });

      // 5. generate tokens
      const tokens = tokenService.generate({ _id: newUser._id });
      await tokenService.save(newUser._id, tokens.refreshToken);

      res.status(201).send({ ...tokens, userId: newUser._id });

    } catch (e) {
      res.status(500).json({
        message: 'Server error. Please try again later.'
      });
    }
  }]);

/*
Login
1. validate
2. find user
3. compare hashed password
4. generate token
5. return data
 */
router.post('/signInWithPassword', [
  check('email', 'Incorrect email').normalizeEmail().isEmail(),
  check('password', 'The password cannot be empty').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400
          }
        });
      }

      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.status(400).send({
          error: {
            message: 'EMAIL_NOT_FOUND',
            code: 400
          }
        });
      }

      const isPasswordEqual = await bcrypt.compare(password, existingUser.password);

      if (!isPasswordEqual) {
        return res.status(400).send({
          error: {
            message: 'INVALID_PASSWORD',
            code: 400
          }
        });
      }

      const tokens = tokenService.generate({ _id: existingUser._id });
      await tokenService.save(existingUser._id, tokens.refreshToken);

      res.status(200).send({ ...tokens, userId: existingUser._id });

    } catch (e) {
      res.status(500).json({
        message: 'Server error. Please try again later.'
      });
    }
  }]);

// Refresh token

function isTokenInvalid(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

router.post('/token', async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;
    const data = tokenService.validateRefresh(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);

    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const tokens = await tokenService.generate({
      _id: data._id
    });

    await tokenService.save(data._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: data._id });
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try again later.'
    });
  }
});

module.exports = router;