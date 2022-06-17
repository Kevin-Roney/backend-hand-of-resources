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
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM classes WHERE id = $1', [id]);
    if (!rows[0]) {
      return null;
    }
    return new Class(rows[0]);
  }
  static async insert({ name, type }) {
    const { rows } = await pool.query(
      'INSERT INTO classes (name, type) VALUES ($1, $2) RETURNING *',
      [name, type]
    );
    return new Class(rows[0]);
  }
}

module.exports = Class;
