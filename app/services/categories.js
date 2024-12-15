const Categories = require("../api/v1/categories/model");

/**
 *
 * @param {Object} payload
 * @param {string} payload.name
 * @returns
 */
const create = async (payload) => await Categories.create(payload);

const index = async () => await Categories.find();

const find = async (id) => await Categories.findOne({ _id: id });

/**
 *
 * @param {string} id
 * @param {Object} payload
 * @param {string} payload.name
 * @returns
 */
const update = async (id, payload) =>
  await Categories.findOneAndUpdate({ _id: id }, payload, {
    new: true, // Return updated document
    runValidators: true, // Enforce schema validation
  });

const destroy = async (id) => await Categories.findOneAndDelete({ _id: id });

module.exports = { create, index, find, update, destroy };
