const Tag = require('../models/Tag');
const tagMock = require('../mock/tags.json');

module.exports = async () => {
  const tags = await Tag.find();
  if (tags.length !== tagMock.length) {
    await createInitialEntity(Tag, tagMock);
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
