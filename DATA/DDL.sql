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
    "place1" TEXT NOT NULL,
    "place2" TEXT NOT NULL,
    "place3" TEXT NOT NULL,
    "place4" TEXT NOT NULL,
    "place5" TEXT NOT NULL,
    "place6" TEXT NOT NULL,
    "place7" TEXT NOT NULL,
    "place8" TEXT NOT NULL,
    "place9" TEXT NOT NULL,
    "place10" TEXT NOT NULL,
    "place11" TEXT NOT NULL,
    "place12" TEXT NOT NULL,
    "place13" TEXT NOT NULL,
    "place14" TEXT NOT NULL,
    "place15" TEXT NOT NULL,
    "place16" TEXT NOT NULL,
    "place17" TEXT NOT NULL,
    "place18" TEXT NOT NULL,
    "place19" TEXT NOT NULL,
    "place20" TEXT NOT NULL,
    "place21" TEXT NOT NULL,
    "place22" TEXT NOT NULL,
    "place23" TEXT NOT NULL,
    "place24" TEXT NOT NULL,
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
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMIT;