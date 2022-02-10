const express = require('express');

const { websiteController } = require('../../controllers/website');

const controllerHandler = require('../../helpers/websiteControllerHandler');
const { WebsiteError } = require('../../helpers/errorHandler');

const router = express.Router();

router.get('/', controllerHandler(websiteController.home));

router.get('/pilots', controllerHandler(websiteController.allPilots));

router.use(() => {
    throw new WebsiteError(404, 'Page introuvable');
});

module.exports = router;
