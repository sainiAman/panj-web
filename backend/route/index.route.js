
const express = require('express');
const testController = require('../controller/test.controller');


module.exports = function () {
  let api = express.Router();

  api.get('/test', testController.testData);

  return api;
};
