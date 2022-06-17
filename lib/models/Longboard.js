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
}

module.exports = Longboard;
