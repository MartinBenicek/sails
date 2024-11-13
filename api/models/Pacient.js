/**
 * Pacient.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  tableName: "Pacient",
  attributes: {
    createdAt: false,
    updatedAt: false,
    Prijmeni: { type: "string", required: true },
    DatumNarozeni: { type: "ref", columnType: "date", required: true },
    Jmeno: { type: "string", required: true },
    Email: { type: "string", required: true, isEmail: true },
    Telefon: { type: "string" },
    Heslo: { type: "string", required: true },
  },
};
