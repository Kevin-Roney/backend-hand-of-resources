const pool = require('../utils/pool');

class Society {
  id;
  name;
  year;
  continent;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.year = row.year;
    this.continent = row.continent;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM societies');
    return rows.map(row => new Society(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM societies WHERE id = $1', [id]);
    if (!rows[0]) {
      return null;
    }
    return new Society(rows[0]);
  }
  static async insert({ name, year, continent }) {
    const { rows } = await pool.query(
      'INSERT INTO societies (name, year, continent) VALUES ($1, $2, $3) RETURNING *',
      [name, year, continent]
    );
    return new Society(rows[0]);
  }
}

module.exports = Society;
