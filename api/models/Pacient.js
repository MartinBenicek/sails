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
    UserRoleID: {
      model: "userrole",
      unique: true,
    },
    karta: { collection: "karta", via: "PacientID" },
  },
};
