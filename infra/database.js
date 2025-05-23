import { Client } from "pg";

async function query(queryObejct) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_P,
  });
  await client.connect();
  const result = await client.query(queryObejct);
  await client.end();
  return result;
}

export default {
  query: query,
};
