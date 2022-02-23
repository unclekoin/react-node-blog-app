const Tag = require('../models/Tag');
const Article = require('../models/Article');
const User = require('../models/User');
const tagMock = require('../mock/tags.json');
const articleMock = require('../mock/articles.json');
const userMock = require('../mock/users.json');

module.exports = async () => {
  const tags = await Tag.find();
  if (tags.length !== tagMock.length) {
    await createInitialEntity(Tag, tagMock);
  }
};

module.exports = async () => {
  const articles = await Article.find();
  if (articles.length !== articleMock.length) {
    await createInitialEntity(Article, articleMock);
  }
};

module.exports = async () => {
  const users = await User.find();
  if (users.length !== userMock.length) {
    await createInitialEntity(User, userMock);
  }
};

async function createInitialEntity(Model, data) {
  Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
