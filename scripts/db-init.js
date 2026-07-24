const { Client } = require('pg');

async function init() {
  if (!process.env.DATABASE_URL) return;

  // Strip sslmode from URL — we set SSL config explicitly below
  const dbUrl = new URL(process.env.DATABASE_URL);
  dbUrl.searchParams.delete('sslmode');

  const client = new Client({
    connectionString: dbUrl.toString(),
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    await client.query('GRANT ALL ON SCHEMA public TO CURRENT_USER');
    await client.query('ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO CURRENT_USER');
    console.log('[db-init] Schema permissions granted successfully');
  } catch (err) {
    console.warn('[db-init] Permission grant warning:', err.message);
  } finally {
    await client.end();
  }
}

init();
