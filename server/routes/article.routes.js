const express = require('express');
const Article = require('../models/Article');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).send(articles);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try again later.'
    });
  }
});


module.exports = router;
