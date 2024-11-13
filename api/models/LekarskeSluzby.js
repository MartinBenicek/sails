/**
 * LekarskeSluzby.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "LekarskeSluzby",
  attributes: {
    createdAt: false,
    updatedAt: false,
    Ukon: { type: "string", required: true },
    Vysetreni: { type: "string" },
    Ockovani: { type: "string" },
    Datum: { type: "ref", columnType: "date", required: true },
  },
};
