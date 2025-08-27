const express = require('express');
const { updateRoleToEducator } = require('../controllers/educatorController.js');
const { ClerkExpressRequireAuth } = require('@clerk/express');

const educatorRouter = express.Router();

// Add Educator Role
educatorRouter.get('/update-role', ClerkExpressRequireAuth(), updateRoleToEducator);

module.exports = educatorRouter;
