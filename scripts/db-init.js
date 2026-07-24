const { Client } = require('pg');

async function init() {
  const host = process.env.DATABASE_HOST;
  const port = process.env.DATABASE_PORT;
  const database = process.env.DATABASE_NAME;
  const user = process.env.DATABASE_USERNAME;
  const password = process.env.DATABASE_PASSWORD;

  if (!host || !database || !user) return;

  const client = new Client({
    host,
    port: parseInt(port) || 5432,
    database,
    user,
    password,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    console.log('[db-init] Connected as:', user, '/', database);
    await client.query('GRANT ALL ON SCHEMA public TO CURRENT_USER');
    console.log('[db-init] GRANT succeeded');
  } catch (err) {
    console.warn('[db-init] Warning:', err.message);
  } finally {
    await client.end();
  }
}

init();
