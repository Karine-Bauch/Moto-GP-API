BEGIN;

INSERT INTO "manufacturer" ("name")
VALUES
    ('Aprilia'),
    ('Ducati'),
    ('Honda'),
    ('KTM'),
    ('Suzuki'),
    ('Yammaha');

INSERT INTO "team" ("name", "moto", "manufacturer_id")
VALUES
    ('Aprilia Racing Team Gresini', 'RS-GP', 1),
    ('Ducati Lenovo Team', 'Desmosedici GP21', 2),
    ('Pramac Racing', 'Desmosedici GP21', 2),
    ('Sky VR46 Esponsorama', 'Desmosedici GP19', 2),
    ('Sky VR46 Avintia', 'Desmosedici GP19', 2),
    ('LCR Honda Idemitsu', 'RC213V', 3),
    ('LCR Honda Castrol', 'RC213V', 3),
    ('Respsol Honda Team HRC', 'RC213V', 3),
    ('Red Bull KTM Factory Racing', 'RC16', 4),
    ('Tech3 KTM Factory Racing', 'RC16', 4),
    ('Team Suzuki Ecstar', 'GSX-RR', 5),
    ('Team Monster Engergy Yamaha MotoGP', 'YZR-M1', 6),
    ('Petronas Yamaha SRT', 'YZR-M1', 6);

INSERT INTO "pilot" ("lastname", "firstname", "number", "nationality")
VALUES
    ('Zarco', 'Johann', 5, 'French'),
    ('Dovizioso', 'Andrea', 4, 'Italian'),
    ('Petrucci', 'Danilo', 9, 'Italian'),
    ('Marini', 'Luca', 10, 'Italian'),
    ('Viñales', 'Maverick', 12, 'Spanish'),
    ('Quartararo', 'Fabio', 20, 'French'),
    ('Morbidelli', 'Franco', 21, 'Italian'),
    ('Bastianini', 'Anea', 23, 'Ducati'),
    ('Lecuona', 'Iker', 27, 'Spanish'),
    ('Nakagami', 'Takaaki', 30, 'Japanese'),
    ('Savadori', 'Lorenzo', 32, 'Italian'),
    ('Binder', 'Brad', 33, 'South African'),
    ('Mir', 'Joan', 36, 'Spanish'),
    ('Espargaro', 'Aleix', 41, 'Spanish'),
    ('Rins', 'Alex', 42, 'Spanish'),
    ('Miller', 'Jack', 43, 'Australian'),
    ('Espargaro', 'Pol', 44, 'Spanish'),
    ('Rossi', 'Valentino', 46, 'Italian'),
    ('Bagnaia', 'Francesco', 63, 'Italian'),
    ('Marquez', 'Alex', 73, 'Spanish'),
    ('Oliveira', 'Miguel', 88, 'Portuguese'),
    ('Martin', 'Jorge', 89, 'Spanish'),
    ('Marquez', 'Marc', 93, 'Spanish'),
    ('Pirro', 'Michele', 51, 'Italian'),
    ('Rabat', 'Tito', 53, 'Spanish'),
    ('Bradl', 'Stepahn', 6, 'German'),
    ('Pedrosa', 'Dani', 26, 'Spanish'),
    ('Gerloff', 'Garrett', 31, 'American'),
    ('Crutchlow', 'Cal', 35, 'British'),
    ('Dixon', 'Jake', 96, 'British');

INSERT INTO "racetrack" ("name", "country", "city")
VALUES 
    ('Losail International Circuit', 'Qatar', 'Lusail'),
    ('Algarve International Circuit', 'Portugal', 'Portimão'),
    ('Circuito de Jerez', 'Spain', 'Jerez de la Frontera'),
    ('Circuit Bugatti', 'France', 'Le Mans'),
    ('Autodromo Internazionale del Mugello', 'Italy', 'Scarperia e San Pierro'),
    ('Circuit de Barcelona-Catalunya', 'Spain', 'Montmelo'),
    ('Sachsenring', 'Germany', 'Hohenstein-Ernstthal'),
    ('TT Circuit Assen', 'Netherlands', 'Assen'),
    ('Red Bull Ring', 'Austria', 'Spielberg'),
    ('Silverstone Circuit', 'Great Britain', 'Silverstone'),
    ('Motroland Aragon', 'Spain', 'Alcañiz'),
    ('Misano World Circuit Marco Simoncelli', 'Italy', 'Misano Adriatico'),
    ('Circuit of the Americas', 'United-States', 'Austin'),
    ('Circuit Ricardo Tormo', 'Spain', 'Valencia');

INSERT INTO "race" ("name", "date", "racetrack_id")
VALUES
    ('Barwa Grand Prix of Qatar', '2021-03-28', 1),
    ('Tissot Grand Prix of Doha', '2021-04-04', 1),
    ('Grande Prémio 888 de Portugal', '2021-04-18', 2),
    ('Gran Premio Red Bull de España', '2021-05-02', 3),
    ('Shark Grand Prix de France', '2021-05-16', 4),
    ('Gran Premio d Italia Oakley', '2021-05-31', 5),
    ('Gran Premi Monster Energy de Catalunya', '2021-06-06', 6),
    ('Liqui Moly Motorrad Grand Prix Deutschland', '2021-06-21', 7),
    ('Motul TT Assen', '2021-06-27', 8),
    ('Michelin Grand Prix of Styria', '2021-08-08', 9),
    ('Bitci Motorrad Grand Prix von Österreich', '2021-08-15', 9),
    ('Monster Energy British Grand Prix', '2021-08-29', 10),
    ('Gran Premio Tissot de Aragón', '2021-09-12', 11),
    ('Gran Premio Octo di San Marino e della Riviera di Rimini', '2021-09-19', 12),
    ('Red Bull Grand Prix of the Americas', '2021-10-03', 13),
    ('Gran Premio Nolan del Made in Italy e dell Emilia-Romagna', '2021-10-24', 12),
    ('Grande Prémio Brembo do Algarve', '2021-11-07', 2),
    ('Gran Premio Motul de la Comunitat Valenciana', '2021-11-14', 14);

INSERT INTO "team_has_pilot" ("team_id", "pilot_id")
VALUES
    (1, 11),
    (1, 5),
    (1, 14),
    (2, 19),
    (2, 16),
    (2, 24),
    (3, 1),
    (3, 22),
    (3, 25),
    (3, 24),
    (4, 4),
    (5, 8),
    (6, 10),
    (7, 20),
    (8, 17),
    (8, 23),
    (8, 26),
    (9, 12),
    (9, 21),
    (9, 27),
    (10, 3),
    (10, 9),
    (11, 13),
    (11, 15),
    (12, 5),
    (12, 29),
    (12, 7),
    (12, 6),
    (13, 7),
    (13, 28),
    (13, 30),
    (13, 2),
    (13, 18);

INSERT INTO "pilot_has_race" ("pilot_id", "race_id", "pilot_position")
VALUES
/* ZARCO */ (1, 1, 2), (1, 2, 2), (1, 4, 8), (1, 5, 2), (1, 6, 4), (1, 7, 2), (1, 8, 8), (1, 9, 4), (1, 10, 6), (1, 12, 11), (1, 13, 17), (1, 14, 12), (1, 16, 5), (1, 17, 5), (1, 18, 5),
/* DOVI */ (2, 14, 21), (2, 15, 13), (2, 16, 13), (2, 17, 14), (2, 18, 12),
/* PETRUX */ (3, 2, 19), (3, 3, 13), (3, 4, 14), (3, 5, 5), (3, 6, 9), (3, 9, 13), (3, 10, 18), (3, 11, 12), (3, 12, 10), (3, 13, 15), (3, 14, 16), (3, 15, 18), (3, 18, 18),
/* MARINI */ (4, 1, 16), (4, 2, 18), (4, 3, 12), (4, 4, 15), (4, 5, 12), (4, 6, 17), (4, 7, 12), (4, 8, 15), (4, 9, 18), (4, 10, 14), (4, 11, 5), (4, 12, 15), (4, 13, 20), (4, 14, 19), (4, 15, 14), (4, 16, 9), (4, 17, 12), (4, 18, 17),
/* VINALES */ (5, 1, 1), (5, 2, 5), (5, 3, 11), (5, 4, 7), (5, 5, 10), (5, 6, 8), (5, 7, 5), (5, 8, 19), (5, 9, 2), (5, 13, 18), (5, 14, 13), (5, 16, 8), (5, 17, 16), (5, 18, 16),
/* QUARTA */ (6, 1, 5), (6, 2, 1), (6, 3, 1), (6, 4, 13), (6, 5, 3), (6, 6, 1), (6, 7, 6), (6, 8, 3), (6, 9, 1), (6, 10, 3), (6, 11, 7), (6, 12, 1), (6, 13, 8), (6, 14, 2), (6, 15, 2), (6, 16, 4), (6, 18, 5),
/* MORBI */ (7, 1, 18), (7, 2, 12), (7, 3, 4), (7, 4, 3), (7, 5, 16), (7, 6, 16), (7, 7, 9), (7, 8, 18), (7, 14, 18), (7, 15, 19), (7, 16, 14), (7, 17, 17), (7, 18, 11),
/* BASTIA */ (8, 1, 10), (8, 2, 11), (8, 3, 9), (8, 5, 14), (8, 7, 10), (8, 8, 16), (8, 9, 15), (8, 10, 12), (8, 12, 12), (8, 13, 6), (8, 14, 3), (8, 15, 6), (8, 16, 3), (8, 17, 9), (8, 18, 8),
/* LECUONA */ (9, 1, 17), (9, 3, 15), (9, 4, 17), (9, 5, 9), (9, 6, 11), (9, 8, 17), (9, 10, 15), (9, 11, 6), (9, 12, 7), (9, 13, 11), (9, 15, 16), (9, 18, 15),
/* NAKAGAMI */ (10, 2, 17), (10, 3, 10), (10, 4, 4), (10, 5, 7), (10, 7, 13), (10, 8, 13), (10, 9, 9), (10, 10, 5), (10, 11, 13), (10, 12, 13), (10, 13, 10), (10, 14, 10), (10, 15, 17), (10, 16, 15), (10, 17, 11),
/* SAVADORI */ (11, 1, 19), (11, 2, 20), (11, 3, 14), (11, 4, 19), (11, 6, 15), (11, 7, 15), (11, 9, 16),
/* BINDER */ (12, 1, 14), (12, 2, 8), (12, 3, 5), (12, 5, 13), (12, 6, 5), (12, 7, 8), (12, 8, 4), (12, 9, 12), (12, 10, 4), (12, 11, 1), (12, 12, 6), (12, 13, 7), (12, 14, 9), (12, 15, 9), (12, 16, 11), (12, 17, 10), (12, 18, 7),
/* MIR */ (13, 1, 4), (13, 2, 7), (13, 3, 3), (13, 4, 5), (13, 6, 3), (13, 7, 4), (13, 8, 9), (13, 9, 3), (13, 10, 2), (13, 11, 4), (13, 12, 9), (13, 13, 3), (13, 14, 6), (13, 15, 8), (13, 17, 2), (13, 18, 4),
/* ESPA ALEIX */ (14, 1, 7), (14, 2, 10), (14, 3, 6), (14, 4, 6), (14, 6, 7), (14, 8, 7), (14, 9, 8), (14, 11, 10), (14, 12, 3), (14, 13, 4), (14, 14, 8), (14, 16, 7), (14, 18, 9),
/* RINS */ (15, 1, 6), (15, 2, 4), (15, 4, 20), (15, 8, 11), (15, 9, 11), (15, 10, 7), (15, 11, 14), (15, 12, 2), (15, 13, 12), (15, 15, 4), (15, 16, 6), (15, 17, 8),
/* MILLER */ (16, 1, 9), (16, 2, 9), (16, 4, 1), (16, 5, 1), (16, 6, 6), (16, 7, 3), (16, 8, 6), (16, 11, 11), (16, 12, 4), (16, 13, 5), (16, 14, 5), (16, 15, 7), (16, 17, 3), (16, 18, 3),
/* ESPA POL */ (17, 1, 8), (17, 2, 13), (17, 4, 10), (17, 5, 8), (17, 6, 12), (17, 8, 10), (17, 9, 10), (17, 10, 16), (17, 11, 16), (17, 12, 5), (17, 13, 13), (17, 14, 7), (17, 15, 10), (17, 16, 2), (17, 17, 6),
/* ROSSI */ (18, 1, 12), (18, 2, 16), (18, 4, 16), (18, 5, 11), (18, 6, 10), (18, 8, 14), (18, 10, 13), (18, 11, 8), (18, 12, 18), (18, 13, 19), (18, 14, 17), (18, 15, 15), (18, 16, 10), (18, 17, 13), (18, 18, 10),
/* BAGNAIA */ (19, 1, 3), (19, 2, 6), (19, 3, 2), (19, 4, 2), (19, 5, 4), (19, 7, 7), (19, 8, 5), (19, 9, 6), (19, 10, 11), (19, 11, 2), (19, 12, 14), (19, 13, 1), (19, 14, 1), (19, 15, 3), (19, 17, 1), (19, 18, 1),
/* MARQUEZ A */ (20, 3, 8), (20, 5, 6), (20, 6, 14), (20, 7, 11), (20, 9, 14), (20, 10, 9), (20, 11, 9), (20, 12, 8), (20, 14, 15), (20, 15, 12), (20, 17, 4), (20, 18, 13),
/* OLIVEIRA */ (21, 1, 13), (21, 2, 15), (21, 3, 16), (21, 4, 11), (21, 6, 2), (21, 7, 1), (21, 8, 2), (21, 9, 5), (21, 12, 16), (21, 13, 14), (21, 14, 20), (21, 15, 11), (21, 18, 14),
/* MARTIN */ (22, 1, 15), (22, 2, 3), (22, 7, 14), (22, 8, 12), (22, 10, 1), (22, 11, 3), (22, 13, 9), (22, 15, 5), (22, 17, 7), (22, 18, 2),
/* MARQUEZ M */ (23, 3, 7), (23, 4, 9), (23, 8, 1), (23, 9, 7), (23, 10, 8), (23, 11, 15), (23, 13, 2), (23, 14, 4), (23, 15, 1), (23, 16, 1),
/* PIRRO */ (24, 6, 13), (24, 14, 11), (24, 16, 12),
/* RABAT */ (25, 4, 18), (25, 5, 15),
/* BRADL */ (26, 4, 12), (26, 15, 14),
/* PEDROSA */ (27, 10, 10),
/* GERLOFF */ (28, 9, 17),
/* CRUTCHLOW */ (29, 10, 17), (29, 11, 17), (29, 12, 17), (29, 13, 16),
/* DIXON */ (30, 12, 19);

COMMIT;