-- Migration 002: Create climate_data table
CREATE TABLE IF NOT EXISTS climate_data (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMPTZ NOT NULL,
    location VARCHAR(255) NOT NULL,
    temperature DECIMAL(5, 2), -- e.g., 25.12
    precipitation DECIMAL(5, 2), -- e.g., 10.50 (mm)
    co2_level DECIMAL(6, 2), -- e.g., 415.70 (ppm)
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Add a comment for context
COMMENT ON TABLE climate_data IS 'Stores time-series data for climate metrics.';