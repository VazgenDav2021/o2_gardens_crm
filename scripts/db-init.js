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
    const result = await client.query('SELECT current_user, current_database()');
    console.log('[db-init] Connected as:', result.rows[0].current_user, '/', result.rows[0].current_database);

    await client.query('GRANT ALL ON SCHEMA public TO CURRENT_USER');
    console.log('[db-init] GRANT succeeded');
  } catch (err) {
    console.warn('[db-init] Warning:', err.message);
  } finally {
    await client.end();
  }
}

init();
