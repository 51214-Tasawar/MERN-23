const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");

const responseHandler = require("../responseHandler");
const errorHandler = require("../errorHandler");
const create = require("../models/usermodel");

module.exports = {
  createUser: async (req, res) => {
    try {
      req.body.userId = uuid();
      req.body.password = await hash(req.body.password, 10);
      const response = await create(req.body);

      // Check if there's an error in the response
      if (response.error) {
        return errorHandler(res, response.error);
      }
      return responseHandler(res, response.response); // send the correct response
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  getUsers: (req, res) => {
    try {
      return res.send({
        code: 200,
        status: "OK",
        response: req.body,
      });
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  updateUser: (req, res) => {
    try {
      return responseHandler(res, req.body);
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  deleteUser: (req, res) => {
    try {
      return responseHandler(res, req.query);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
};
