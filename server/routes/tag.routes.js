const express = require('express');
const Tag = require('../models/Tag');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).send(tags);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try again later.'
    });
  }
});


module.exports = router;
