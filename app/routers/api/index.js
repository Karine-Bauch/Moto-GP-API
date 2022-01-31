const express = require('express');

const manufacturerRouter = require('./manufacturer');
const teamRouter = require('./team');
const pilotRouter = require('./pilot');
const racetrackRouter = require('./racetrack');
const raceRouter = require('./race');

const { apiController } = require('../../controllers/api');

// const ApiError = require('../../helpers/errorHandler');

const router = express.Router();

// Route par défaut de l'API, pour toutes les méthodes
// si jamais l'utilisateur oublie de le préciser.
router.all('/', apiController.home);

// Préfixes des routes de l'API
router.use('/manufacturers', manufacturerRouter);
router.use('/teams', teamRouter);
router.use('/pilots', pilotRouter);
router.use('/racetracks', racetrackRouter);
router.use('/races', raceRouter);

router.use(() => {
    // throw new ApiError(404, 'API route not found');
    console.log('Error 404: API route not found');
});

module.exports = router;
