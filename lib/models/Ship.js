const pool = require('../utils/pool');

class Ship {
  id;
  name;
  cannons;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.cannons = row.cannons;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM ships');
    return rows.map(row => new Ship(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM ships WHERE id = $1', [id]);
    if (!rows[0]) {
      return null;
    }
    return new Ship(rows[0]);
  }
}

module.exports = Ship;
