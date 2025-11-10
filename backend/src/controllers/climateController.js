const db = require('../config/database');
const logger = require('../utils/logger');

// O(n) filtering, but assumes DB query is optimized
const getTemperatureData = async (req, res, next) => {
  const { startDate, endDate, location } = req.query;

  try {
    // Basic validation (use express-validator in middleware for real app)
    if (!startDate || !endDate || !location) {
      return res.status(400).json({ message: 'Missing required query parameters' });
    }

    // SQL query (parameterized to prevent SQL injection)
    const queryText = `
      SELECT timestamp, temperature
      FROM climate_data
      WHERE location = $1
        AND timestamp >= $2
        AND timestamp <= $3
      ORDER BY timestamp ASC;
    `;
    
    // DB indexing on (location, timestamp) makes this O(log n) or O(k) (k=results)
    const { rows } = await db.query(queryText, [location, startDate, endDate]);

    res.status(200).json(rows);
  } catch (err) {
    logger.error('Error fetching temperature data', err);
    next(err); // Pass error to global error handler
  }
};

const getPrecipitationData = async (req, res, next) => {
  // ... similar logic for precipitation
  res.status(200).json({ message: 'Precipitation data (stub)' });
};

const getCO2Data = async (req, res, next) => {
  // ... similar logic for CO2
  res.status(200).json({ message: 'CO2 data (stub)' });
};

module.exports = {
  getTemperatureData,
  getPrecipitationData,
  getCO2Data,
};