const express = require('express');

const { raceController } = require('../../controllers/api');

const router = express.Router();

router.get('/', raceController.getAll);

module.exports = router;
