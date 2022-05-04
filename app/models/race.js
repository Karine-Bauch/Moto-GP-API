const client = require('../config/db');

/**
 * @typedef {object} races
 * @property {number} id race id
 * @property {string} name race name
 * @property {string} date race date
 * @property {number} racetrack_id racetrack where race is run
 * @property {string} created_at creation date of the record
 * @property {string} updated_at last update date of the record
 */

/**
 * @typedef {object} race
 * @property {number} id race id
 * @property {string} race_name race name
 * @property {string} date race date
 * @property {string} racetrack_name race racetrack_name
 * @property {string} country race country
 * @property {string} city race city
 * @property {object} pilots array of pilots who have participated at the race
//  * @property {object} weatherRace array of weather conditions (here at today,
//  * because API is not free for other days)
 */

module.exports = {

    /**
     * Show all races from DB
     * @returns {races} all races from DB
     */

    async findAll() {
        const result = await client.query('SELECT * FROM "race"');
        return result.rows;
    },

    /**
     * Show race with the id selected
     * @param {number} id race id
     * @returns {race} race with id selected
     */
    async findOne(id) {
        const raceId = Number(id);
        const result = await client.query(`SELECT "race"."id", "race"."name" AS race_name, "race"."date",
        "racetrack"."name" AS racetrack_name, "racetrack"."country", "racetrack"."city",
        array_agg((pilot.firstname || ' ' || pilot.lastname) ORDER BY pilot_position) AS pilot_name
        FROM pilot
        JOIN pilot_has_race ON pilot.id = pilot_id
        JOIN "race" ON race_id = race.id
        JOIN "racetrack" ON "racetrack_id" = "racetrack"."id"
        WHERE "race"."id" = ${raceId}
        GROUP BY "race"."id", "race"."name", "race"."date", "racetrack"."name",
        "racetrack"."country", "racetrack"."city"`);
        return result.rows[0];
    },
};
