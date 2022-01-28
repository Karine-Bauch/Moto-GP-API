EQUIPE (idEquipe, nom, sponsor, #idMarque)
CIRCUIT (idCircuit, nom, pays, ville)
MARQUE (idMarque, nom)
PILOTE (idPilote, nom, prénom, numéro, nationalité)
COURSE (idCourse, nom, date, #idCircuit)

APPARTENIR (#idPilote, #idEquipe)
PARTICIPER (#idPilote, #idCourse, position)
