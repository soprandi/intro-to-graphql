\c postgres;

INSERT INTO example.book (title, author) VALUES('Cent''anni di solitudine.','Gabriel García Márquez.');
INSERT INTO example.book (title, author) VALUES('Il Decamerone','Giovanni Boccaccio');
INSERT INTO example.book (title, author) VALUES('Delitto e castigo','Fedor Dostoevskij');
INSERT INTO example.book (title, author) VALUES('Odissea','Omero');
INSERT INTO example.book (title, author) VALUES('Guerra e pace','Lev Tolstoj');
INSERT INTO example.book (title, author) VALUES('Il ritratto di Dorian Gray','Oscar Wilde');
INSERT INTO example.book (title, author) VALUES('La coscienza di Zeno','Italo Svevo');
INSERT INTO example.book (title, author) VALUES('Alla ricerca del tempo perduto','Marcel Proust');
INSERT INTO example.book (title, author) VALUES('Alice nel paese delle meraviglie','Lewis Carroll');
INSERT INTO example.book (title, author) VALUES('I promessi sposi','Alessandro Manzoni');

INSERT INTO example.price (id, book_id, value) VALUES(1, 1, 10);
INSERT INTO example.price (id, book_id, value) VALUES(2, 2, 12);
INSERT INTO example.price (id, book_id, value) VALUES(3, 3, 15.5);
INSERT INTO example.price (id, book_id, value) VALUES(4, 4, 13.2);
INSERT INTO example.price (id, book_id, value) VALUES(5, 5, 7.5);
INSERT INTO example.price (id, book_id, value) VALUES(6, 6, 5.5);
INSERT INTO example.price (id, book_id, value) VALUES(7, 7, 1.5);
INSERT INTO example.price (id, book_id, value) VALUES(8, 8, 10.7);
INSERT INTO example.price (id, book_id, value) VALUES(9, 9, 21.5);
INSERT INTO example.price (id, book_id, value) VALUES(10, 10, 27.5);
