const express = require('express');
const Article = require('../models/Article');
const router = express.Router({ mergeParams: true });

router.get('/:articleId', async (req, res) => {
  try {
    const { articleId } = req.params;
    const article = await Article.findById(articleId);
    res.status(200).send(article);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try again later.',
    });
  }
});

router
  .route('/')
  .get(async (req, res) => {
    try {
      const articles = await Article.find();
      res.status(200).send(articles);
    } catch (e) {
      res.status(500).json({
        message: 'Server error. Please try again later.',
      });
    }
  })
  .post(async (req, res) => {
    try {
      const article = await Article.create({
        ...req.body,
        // userId: req.user._id
      });
      res.status(201).send(article);
    } catch (e) {
      res.status(500).json({
        message: 'Server error. Please try again later.',
      });
    }
  });

  router.patch('/:articleId', async (req, res) => {
    try {
      const { articleId } = req.params;
        const updatedArticle = await User.findByIdAndUpdate(articleId, req.body, { new: true });
        res.send(updatedArticle);
    } catch (e) {
      res.status(500).json({
        message: 'Server error. Please try again later.'
      });
    }
  });

router.delete('/:articleId', async (req, res) => {
  try {
    const { articleId } = req.params;
    const removedArticle = await Article.findById(articleId);
    await removedArticle.remove();
    return res.send(null);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try again later.',
    });
  }
});

module.exports = router;
