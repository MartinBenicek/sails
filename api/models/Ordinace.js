/**
 * Ordinace.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "Ordinace",
  attributes: {
    createdAt: false,
    updatedAt: false,
    Budova: { type: "string", required: true },
    Mistnost: { type: "string", required: true },
  },
};
