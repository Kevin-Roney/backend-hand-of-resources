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
}
