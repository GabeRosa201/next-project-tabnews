import { Client } from "pg";

async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_P,
    ssl: process.env.NODE_ENV === "development" ? false : true,
  });

  await client.connect();
  return client;
}

async function query(queryObejct) {
  let client;
  try {
    client = await getNewClient();
    const result = await client.query(queryObejct);
    return result;
  } catch (erro) {
    console.log(error);
  } finally {
    await client.end();
  }
}

export default {
  query,
  getNewClient,
};
