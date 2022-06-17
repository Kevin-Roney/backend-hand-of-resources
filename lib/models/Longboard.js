const pool = require('../utils/pool');

class Longboard {
  id;
  name;
  brand;
  price;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.brand = row.brand;
    this.price = row.price;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM longboards');
    return rows.map(row => new Longboard(row));
  }
  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM longboards WHERE id = $1', 
      [id]
    );
    if (!rows[0]) {
      return null;
    }
    return new Longboard(rows[0]);
  }
  static async insert({ name, brand, price }) {
    const { rows } = await pool.query(
      'INSERT INTO longboards (name, brand, price) VALUES ($1, $2, $3) RETURNING *',
      [name, brand, price]
    );
    return new Longboard(rows[0]);
  }
  static async updateById(id, attrs) {
    const longboard = await Longboard.getById(id);
    if (!longboard) return null;
    const { name, brand, price } = { ...longboard, ...attrs };
    const { rows } = await pool.query(
      `UPDATE longboards
      SET name = $2, brand = $3, price = $4
      WHERE id = $1
      RETURNING *`,
      [id, name, brand, price]
    );
    return new Longboard(rows[0]);
  }
  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM longboards WHERE id = $1 RETURNING *',
      [id]
    );
    return new Longboard (rows[0]);
  }
}

module.exports = Longboard;
