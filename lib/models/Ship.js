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
  static async insert({ name, cannons }) {
    const { rows } = await pool.query(
      'INSERT INTO ships (name, cannons) VALUES ($1, $2) RETURNING *',
      [name, cannons]
    );
    return new Ship(rows[0]);
  }
  static async updateById(id, attrs) {
    const ship = await Ship.getById(id);
    if (!ship) return null;
    const { name, cannons } = { ...ship, ...attrs };
    const { rows } = await pool.query(
      `UPDATE ships
      SET name = $2, cannons = $3
      WHERE id = $1
      RETURNING *`,
      [id, name, cannons]
    );
    return new Ship(rows[0]);
  }
}

module.exports = Ship;
