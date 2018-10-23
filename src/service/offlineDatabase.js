import uuid from 'uuid/v4';
import { Constants } from 'expo';
import { executeStatements } from './sqlite';

const setItem = async ({ table, id }, payload) => {
  let savePayload,
    statements = null;
  if (id) {
    savePayload = { ...payload, id };
    statements = [
      {
        query: `UPDATE cases SET payload = '${JSON.stringify(
          savePayload
        )}' WHERE id = '${id}';`,
        args: []
      }
    ];
  } else {
    savePayload = { ...payload };
    savePayload.id = `${Constants.deviceId}_${uuid()}`; // Fabricated client-side ID
    savePayload.status = 'Saved Offline';
    statements = [
      {
        query: `INSERT INTO ${table} (id, payload) values('${
          savePayload.id
        }', '${JSON.stringify(savePayload)}');`,
        args: []
      }
    ];
  }
  await executeStatements(statements);
  return savePayload;
};
const getItem = async table => {
  let statements = [
    {
      query: `SELECT id, payload FROM ${table};`
    }
  ];
  let results = await executeStatements(statements);
  return results[statements[0].query]._array;
};
const removeItem = async ({ table, id }) => {
  let statements = [
    { query: `DELETE FROM ${table} WHERE id = '${id}';`, args: [] }
  ];
  await executeStatements(statements);
  return true;
};

export default {
  setItem,
  getItem,
  removeItem
};
