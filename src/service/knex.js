import knex from 'knex';
import { SQLite } from 'expo';

const client = knex({
  client: 'sqlite3',
  connection: SQLite.openDatabase('db.db'),
  useNullAsDefault: true
});

module.exports = {
  client
};
