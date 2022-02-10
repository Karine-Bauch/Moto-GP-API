-- Deploy motogp:2-add-lat-long to pg
-- NOT USED
BEGIN;

ALTER TABLE "racetrack"
ADD COLUMN "latitude" FLOAT
ADD COLUMN "longitude" FLOAT;

UPDATE "racetrack"
SET "latitude" = 25.391450 AND "longitude" = 51.517370
WHERE "city" = 'Lusail';

COMMIT;
