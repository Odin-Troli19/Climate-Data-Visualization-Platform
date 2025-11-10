const express = require('express');
const router = express.Router();
const climateController = require('../controllers/climateController');
const authMiddleware = require('../middleware/auth');
// const validationMiddleware = require('../middleware/validation');

// Apply auth middleware to all climate routes
router.use(authMiddleware);

// GET /api/climate/temperature
router.get(
  '/temperature',
  // validationMiddleware.validateDateRange, // Example of validation
  climateController.getTemperatureData
);

// GET /api/climate/precipitation
router.get('/precipitation', climateController.getPrecipitationData);

// GET /api/climate/co2
router.get('/co2', climateController.getCO2Data);

module.exports = router;