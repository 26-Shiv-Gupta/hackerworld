const express = require('express');
const { updateRoleToEducator } = require('../controllers/educatorController.js');
const { requireAuth } = require('@clerk/express');

const educatorRouter = express.Router();

// Add Educator Role
educatorRouter.get('/update-role', requireAuth(), updateRoleToEducator);

module.exports = educatorRouter;
