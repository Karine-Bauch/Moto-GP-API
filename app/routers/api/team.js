const express = require('express');

const { teamController } = require('../../controllers/api');

const router = express.Router();

router.get('/', teamController.getAll);

module.exports = router;
