const express = require('express');

const { manufacturerController } = require('../../controllers/api');

const router = express.Router();

router.get('/', manufacturerController.getAll);

module.exports = router;
