-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS longboards CASCADE;
DROP TABLE IF EXISTS societies CASCADE;
DROP TABLE IF EXISTS classes CASCADE;

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

CREATE TABLE societies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  year VARCHAR NOT NULL,
  continent VARCHAR NOT NULL
);
INSERT INTO societies (
  name,
  year,
  continent
)
VALUES
('Sumer', '4500 bce', 'Asia'),
('Babylon', '2300 bce', 'Asia'),
('Egypt', '3100 bce', 'Africa'),
('Greece', '1600 bce', 'Europe'),
('Rome', '753 bce', 'Europe');

CREATE TABLE classes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  type VARCHAR NOT NULL
);
INSERT INTO classes (
  name,
  type
)
VALUES
('Warrior', 'Tank'),
('Paladin', 'Tank'),
('Dark Knight', 'Tank'),
('Gunbreaker', 'Tank'),
('White Mage', 'Healer'),
('Astrologian', 'Healer'),
('Sage', 'Healer'),
('Scholar', 'Healer'),
('Red Mage', 'DPS'),
('Black Mage', 'DPS'),
('Bard', 'DPS'),
('Monk', 'DPS'),
('Ninja', 'DPS'),
('Dragon', 'DPS'),
('Lancer', 'DPS'),
('Reaper', 'DPS'),
('Samurai', 'DPS');
