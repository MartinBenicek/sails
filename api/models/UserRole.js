/**
 * UserRole.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "UserRole",
  attributes: {
    createdAt: false,
    updatedAt: false,
    UserID: {
      model: "user",
      unique: true,
    },
    RoleID: {
      model: "role",
      unique: true,
    },
    pacient: { collection: "pacient", via: "UserRoleID" },
  },
};
