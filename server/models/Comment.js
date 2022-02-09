const { Schema, model } = require('mongoose');

const schema = new Schema({
  content: { type: String, required: true },
  articleId: {type: Schema.Types.ObjectId, ref: 'Article', required: true},
  // this is the person who wrote a comment
  userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
}, {
  timestamps: true
});

module.exports = model('Comment', schema);
