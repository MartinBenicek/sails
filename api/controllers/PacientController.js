/**
 * PacientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: function (req, res) {
    Pacient.find()
      .then(function (pacients) {
        if (!pacients || pacients.length == 0) {
          return res.send({
            success: false,
            message: "No record found",
          });
        }
        return res.send({
          success: true,
          message: "record found",
          data: pacients,
        });
      })
      .catch(function (error) {
        sails.log.debug(error);
        return res.send({
          success: false,
          message: "unable to fetch",
        });
      });
  },

  get: function (req, res) {
    sails.log.debug(req);
  },
};
