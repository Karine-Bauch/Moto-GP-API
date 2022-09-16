# Moto-GP

This API give many informations about Moto GP of 2021 season
- Riders (name, number, age...)
- Teams (name, moto, riders, manufacturer...)
- Manufacturers (name, nationality...)
- Ractracks (name, country, city...)
- Races (name, country, recatrack...)

To run you should have :
- postgresql installed
- to create the DB in pg
- run `npm i`
- config the sqitch.conf, .env
- run `sqitch deploy --to 1-initdb.sql `
- execute the DML in the DB created
- run the app `node index.js`
- open http://localhost:PORT/api-docs

Now you can test the API in JSDOC SWAGGER
