const { Client } = require('pg');

async function init() {
  if (!process.env.DATABASE_URL) return;

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    await client.query('GRANT CREATE ON SCHEMA public TO CURRENT_USER');
    console.log('[db-init] Schema permissions granted');
  } catch (err) {
    console.warn('[db-init] Could not grant permissions:', err.message);
  } finally {
    await client.end();
  }
}

init();
