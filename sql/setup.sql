-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS longboards CASCADE;


CREATE TABLE movies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR NOT NULL,
  year INT NOT NULL,
  genre VARCHAR NOT NULL
);
INSERT INTO movies (
  title,
  year,
  genre
) 
VALUES
  ('The Shawshank Redemption', 1994, 'Drama'),
  ('The Godfather', 1972, 'Drama'),
  ('The Godfather: Part II', 1974, 'Drama'),
  ('The Dark Knight', 2008, 'Action');

CREATE TABLE longboards (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  brand VARCHAR NOT NULL,
  price INT NOT NULL
);
INSERT INTO longboards (
  name,
  brand,
  price
)
VALUES
  ('Cheesegrater', 'Landyachtz', 224.95),
  ('Battle Axe', 'Landyachtz', 124.95),
  ('The Tabor', 'Eastside', 179.99),
  ('Mach 3', 'Eastside', 199.99);
