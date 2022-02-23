const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    rate: { type: Number },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    content: {type: Schema.Types.Mixed}
  },
  {
    timestamps: true,
  }
);

module.exports = model('Article', schema);
