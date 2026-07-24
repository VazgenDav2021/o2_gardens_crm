const { Client } = require('pg');

async function init() {
  if (!process.env.DATABASE_URL) return;

  const dbUrl = new URL(process.env.DATABASE_URL);
  dbUrl.searchParams.delete('sslmode');

  const client = new Client({
    connectionString: dbUrl.toString(),
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    await client.query('CREATE SCHEMA IF NOT EXISTS strapi_app');
    console.log('[db-init] Schema strapi_app ready');
  } catch (err) {
    console.warn('[db-init] Warning:', err.message);
  } finally {
    await client.end();
  }
}

init();
