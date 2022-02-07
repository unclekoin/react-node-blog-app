const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String},
  email: { type: String, required: true, unique: true},
  password: { type: String},
  admin: { type: Boolean },
  image: { type: String},
  rate: { type: Number},
  quantityArticles: { type: Number}
}, {
  timestamps: true
});

module.exports = model('User', schema);
