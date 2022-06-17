const pool = require('../utils/pool');

class Class {
  id;
  name;
  type;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM classes');
    return rows.map(row => new Class(row));
  }
}

module.exports = Class;
