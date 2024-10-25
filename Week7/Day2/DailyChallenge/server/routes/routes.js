const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/users', controller.getAll);
router.get('/users/:id', controller.getUser);
router.put('/users/:id', controller.updateUser);

module.exports = router;