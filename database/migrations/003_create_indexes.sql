-- Migration 003: Create indexes for climate_data
-- This index is crucial for O(log n) lookups on the most common query
CREATE INDEX IF NOT EXISTS idx_climate_data_location_timestamp 
ON climate_data (location, timestamp DESC);

-- Optional index if you query by timestamp ranges across all locations
CREATE INDEX IF NOT EXISTS idx_climate_data_timestamp 
ON climate_data (timestamp DESC);