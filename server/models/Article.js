const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String },
  author: { type: Schema.Types.ObjectId },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
}, {
  timestamps: true
});

module.exports = model('Article', schema);
