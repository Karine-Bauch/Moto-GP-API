const express = require('express');

const { racetrackController } = require('../../controllers/api');

const router = express.Router();

router.get('/', racetrackController.getAll);

module.exports = router;
