-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS movies CASCADE;



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
