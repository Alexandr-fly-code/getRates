const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user_controller');

router.get('/', userControllers.getUsers);

router.post('/create', userControllers.addUser);

module.exports = router;

