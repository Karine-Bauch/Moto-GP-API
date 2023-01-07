-- Deploy motogp:2-add-lat-long to pg
-- NOT USED
BEGIN;

ALTER TABLE "racetrack"
ADD COLUMN "latitude" FLOAT,
ADD COLUMN "longitude" FLOAT;

COMMIT;
