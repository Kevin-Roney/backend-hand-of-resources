const pool = require('../utils/pool');

class Movie {
  id;
  title;
  year;
  genre;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.year = row.year;
    this.genre = row.genre;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM movies');
    return rows.map(row => new Movie(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
    if (!rows[0]) {
      return null;
    }
    return new Movie(rows[0]);
  }
  static async insert({ title, year, genre }) {
    const { rows } = await pool.query(
      'INSERT INTO movies (title, year, genre) VALUES ($1, $2, $3) RETURNING *',
      [title, year, genre]
    );
    return new Movie(rows[0]);
  }
}

module.exports = Movie;
