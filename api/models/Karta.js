/**
 * Karta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "Karta",
  attributes: {
    createdAt: false,
    updatedAt: false,
    Stav: { type: "string", required: true },
    Datum: { type: "ref", columnType: "date", required: true },
  },
};
