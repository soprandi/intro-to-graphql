\c postgres;

CREATE TABLE example.book (
	id INT GENERATED ALWAYS AS IDENTITY,
	title varchar NOT NULL,
	author varchar NULL
);

CREATE TABLE example.price (
	id numeric NULL,
	book_id numeric NULL,
	value float NULL
);

CREATE TABLE example.reseller (
	id INT GENERATED ALWAYS AS IDENTITY,
	name varchar NOT NULL,
	address varchar NULL
);
