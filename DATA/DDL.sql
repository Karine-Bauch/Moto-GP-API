BEGIN;

DROP TABLE IF EXISTS "equipe", "pilote", "circuit", "marque", "course";

CREATE TABLE "pilot" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "team" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "sponsor" TEXT NOT NULL,
    "brand_id" INT REFERENCES "brand"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "brand" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "racetrack" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "race" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "date" TIMESTAMPTZ NOT NULL,
    "racetrack_id" INT REFERENCES "ractrack"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "team_has_pilot" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "team_id" INT NOT NULL REFERENCES "team"("id"),
    "pilot_id" INT NOT NULL REFERENCES "pilot"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE "pilot_has_race" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "pilot_id" INT NOT NULL REFERENCES "pilot"("id"),
    "race_id" INT NOT NULL REFERENCES "race"("id"),
    "pilot_position" INT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMIT;