const express = require('express');
const router = express.Router({ mergeParams: true });

// /api/auth
router.use('/auth', require('./auth.routes'));
router.use('/article', require('./article.routes'));
router.use('/comment', require('./comment.routes'));
router.use('/tag', require('./tag.routes'));
router.use('/user', require('./user.routes'));

module.exports = router;
