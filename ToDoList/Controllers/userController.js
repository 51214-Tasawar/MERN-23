const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");

const responseHandler = require("../responseHandler");
const errorHandler = require("../errorHandler");
const {create , getAll , Update ,Delete} = require("../models/usermodel");
const { response } = require("express");

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
      return responseHandler(res, response.response); 
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  getUsers:async (req, res) => {
    try {
      const update = await getAll();
      if (update.error) {
        return errorHandler(res, update.error);
      }
      return responseHandler(res, update.update); // send the correct response
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  updateUser: async(req, res) => {
    try {
      const response = await Update(req.body) ;
     if(response.error){
      return errorHandler(res, response.error);
     }
     return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  deleteUser: async(req, res) => {
    try {
      const response = await Delete(req.query) ;
     if(response.error){
      return errorHandler(res, response.error);
     }
     return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
};
