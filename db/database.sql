create database apitest;
use apitest;

create table Test(
idAnime INT auto_increment PRIMARY KEY,
anime varchar(80),
genero varchar(30),
inform varchar(400)
);

insert into Test (`idAnime`,`anime`,`genero`,`inform`) values (1,'Black Clover','Acción, aventura, fantasía','Es una serie de anime japonesa adaptada del manga del mismo nombre escrita e ilustrada por Yūki Tabata. La historia gira en torno de un joven llamado Asta, nacido sin poder mágico, algo desconocido en el mundo en el que vive, ya que todos los humanos nacen para ser magos');
insert into Test (`idAnime`,`anime`,`genero`,`inform`) values (2,'Jujutsu Kaisen','Acción, horror, sobrenatural','Es una serie de manga escrita e ilustrada por Gege Akutami. La historia sigue a Yuji Itadori, un adolescente con habilidades físicas excepcionales que se une al club de ocultismo de su escuela para evitar que el talismán maldito Ryomen Sukuna sea revivido');
insert into Test (`idAnime`,`anime`,`genero`,`inform`) values (3,'86 Eighty-six','Acción, drama, ciencia ficción',' Es una serie de novelas ligeras japonesas escritas por Asato Asato e ilustradas por Shirabi. La historia sigue a un grupo de jóvenes soldados conocidos como los “Eighty-Six” y su lucha contra la opresión del gobierno');
insert into Test (`idAnime`,`anime`,`genero`,`inform`) values (4,'Trigun','Acción, aventura, comedia',' Es una serie de anime y manga creada por Yasuhiro Nightow. La historia sigue a Vash the Stampede, un pistolero con una recompensa de 60 mil millones de dólares en su cabeza, mientras viaja por un planeta desértico tratando de escapar de aquellos que buscan cobrar la recompensa');
insert into Test (`idAnime`,`anime`,`genero`,`inform`) values (5,'Death Note','thriller psicológico.','Es una serie de manga escrita por Tsugumi Ohba e ilustrada por Takeshi Obata. La historia sigue a Light Yagami, un estudiante sobresaliente que encuentra un cuaderno sobrenatural llamado “Death Note”, que le permite matar a cualquier persona cuyo nombre escriba en él.');
insert into Test (`idAnime`,`anime`,`genero`,`inform`) values (6,'Helss Paradise','Acción, drama, horror.','Es una serie de manga escrita e ilustrada por Yuji Kaku. La historia sigue a Gabimaru, un ninja condenado a muerte que es enviado a una isla misteriosa para encontrar el elixir de la vida eterna.');
insert into Test (`idAnime`,`anime`,`genero`,`inform`) values (7,'Vinland Saga','Acción, drama histórico.','Es una serie de manga histórico escrita e ilustrada por Makoto Yukimura. La historia se desarrolla en Inglaterra en el siglo XI y sigue a Thorfinn, un joven vikingo que busca venganza contra Askeladd, el hombre que mató a su padre.');
