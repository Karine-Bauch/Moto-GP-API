const express = require('express');

const { pilotController } = require('../../controllers/api');

const router = express.Router();

router.get('/', pilotController.getAll);

module.exports = router;
