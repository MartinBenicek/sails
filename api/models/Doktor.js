/**
 * Doktor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "Doktor",
  attributes: {
    createdAt: false,
    updatedAt: false,
    UserRoleID: {
      model: "UserRole",
      unique: true,
    },
    TitulID: {
      model: "Titul",
      unique: true,
    },
    Odrinace: {
      collection: "ordinace",
      via: "doktor",
    },
  },
};
