/**
 * Titul.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "Titul",
  attributes: {
    createdAt: false,
    updatedAt: false,
    Nazev: { type: "string", required: true },
  },
};
