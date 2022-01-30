# MLD MOTO GP

MARQUE (idMarque, nom)
EQUIPE (idEquipe, nom, sponsor, #idMarque)

PILOTE (idPilote, nom, prénom, numéro, nationalité)

CIRCUIT (idCircuit, nom, pays, ville)
COURSE (idCourse, nom, date, #idCircuit)

APPARTENIR (idAppartenir, #idPilote, #idEquipe)
PARTICIPER (idParticiper, #idPilote, #idCourse, position)
