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
}

module.exports = Ship;
