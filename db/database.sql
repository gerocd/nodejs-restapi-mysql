create database apitest;
use apitest;

create table animes(
idAnime int primary key auto_increment,
anime varchar(200),
genero varchar(100),
info varchar(350),
calificacion int
);

insert into animes (`idAnime`,`anime`,`genero`,`info`,`calificacion`) values (1,'Vinland Saga','Acción, Drama, Histórico','La serie sigue la historia de Thorfinn, un joven vikingo que busca venganza contra Askeladd, el hombre que mató a su padre. La serie se desarrolla en la Inglaterra del siglo XI y se centra en la lucha por el trono inglés.',10);
insert into animes (`idAnime`,`anime`,`genero`,`info`,`calificacion`) values (2,'Berserk 1998',' Acción, Aventura, Drama, Fantasía, Horror','La serie sigue la historia de Guts, un guerrero solitario que busca venganza contra su antiguo amigo Griffith. La serie se desarrolla en un mundo de fantasía oscuro y violento.',9);
insert into animes (`idAnime`,`anime`,`genero`,`info`,`calificacion`) values (3,'Cowboy Bebop','Acción, Opera Espacial, Ciencia ficción','La serie sigue las aventuras de un grupo de cazarrecompensas que viajan por el espacio en busca de criminales peligrosos. La serie es conocida por su estilo de animación único y su banda sonora de jazz.',9);
insert into animes (`idAnime`,`anime`,`genero`,`info`,`calificacion`) values (4,'Attack on Titan','Acción, Drama, Fantasía oscura','La serie se desarrolla en un mundo donde la humanidad vive rodeada por muros para protegerse de los titanes, gigantes humanoides que devoran a los humanos sin razón aparente. La serie sigue la historia de Eren Yeager y sus amigos mientras luchan contra los titanes y descubren los secretos detrás de su existencia.',10);
insert into animes (`idAnime`,`anime`,`genero`,`info`,`calificacion`) values (5,'Death Note','Misterio, Psicológico, Sobrenatural','La serie sigue la historia de Light Yagami, un estudiante sobresaliente que encuentra un cuaderno sobrenatural que le permite matar a cualquier persona cuyo nombre escriba en él. Light decide usar el cuaderno para crear un mundo libre de criminales, pero pronto se encuentra en una batalla intelectual con L, el detective encargado de atraparlo',8);
insert into animes (`idAnime`,`anime`,`genero`,`info`,`calificacion`) values (6,'Demon Slayer','Aventura, Drama, Fantasía oscura','La serie sigue la historia de Tanjiro Kamado, un joven que se convierte en cazador de demonios después de que su familia es asesinada por uno. Tanjiro busca venganza contra el demonio que mató a su familia mientras intenta salvar a su hermana menor, quien se convirtió en un demonio después del ataque',8);
insert into animes (`idAnime`,`anime`,`genero`,`info`,`calificacion`) values (7,'Full Metal Alchemist','Aventura, Comedia dramática','La serie sigue la historia de dos hermanos alquimistas, Edward y Alphonse Elric, mientras buscan una manera de recuperar sus cuerpos después de una fallida transmutación humana. La serie se desarrolla en un mundo donde la alquimia es una ciencia avanzada y peligrosa',9);


