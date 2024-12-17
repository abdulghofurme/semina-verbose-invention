const Categories = require("../api/v1/categories/model");
const { NotFound } = require("../errors");

const toCategoryResponse = (category) => ({
  id: category._id,
  name: category.name,
  createdAt: category.createdAt,
  updatedAt: category.updatedAt,
});

/**
 *
 * @param {Object} payload
 * @param {string} payload.name
 * @returns
 */
const create = async (payload) => {
  const category = await Categories.create(payload);


  return toCategoryResponse(category);
};

const index = async () => {
  const categories = await Categories.find();

  return categories.map((category) => toCategoryResponse(category));
};

const find = async (id) => {
  const category = await Categories.findOne({ _id: id });

  if (!category) throw new NotFound(`Kategori tidak ditemukan`)

  return toCategoryResponse(category);
};

/**
 *
 * @param {string} id
 * @param {Object} payload
 * @param {string} payload.name
 * @returns
 */
const update = async (id, payload) => {
  const category = await Categories.findOneAndUpdate({ _id: id }, payload, {
    new: true, // Return updated document
    runValidators: true, // Enforce schema validation
  });

  if (!category) throw new NotFound(`Kategori tidak ditemukan`)

  return toCategoryResponse(category);
};

const destroy = async (id) => {
  const category = await Categories.findOneAndDelete({ _id: id });

  if (!category) throw new NotFound(`Kategori tidak ditemukan`)

  return toCategoryResponse(category);
};

module.exports = { create, index, find, update, destroy };
