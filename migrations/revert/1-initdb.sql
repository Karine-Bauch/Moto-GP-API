-- Revert motogp:1-initdb from pg

BEGIN;

DROP TABLE "manufacturer", "team", "pilot", "racetrack", "race", "team_has_pilot", "pilot_has_race";

COMMIT;
