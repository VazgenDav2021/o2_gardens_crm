import path from 'path';

export default ({ env }) => {
  const databaseUrl = env('DATABASE_URL', null);
  const client = databaseUrl ? 'postgres' : (env('DATABASE_CLIENT', 'sqlite'));

  let connection: any;

  if (databaseUrl) {
    const url = new URL(databaseUrl);
    connection = {
      host: url.hostname,
      port: parseInt(url.port) || 5432,
      database: url.pathname.replace(/^\//, ''),
      user: decodeURIComponent(url.username),
      password: decodeURIComponent(url.password),
      ssl: { rejectUnauthorized: false },
    };
  } else if (client === 'postgres') {
    connection = {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false)
        ? { rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true) }
        : false,
    };
  } else {
    connection = {
      filename: path.join(process.cwd(), env('DATABASE_FILENAME', '.tmp/data.db')),
    };
  }

  const pool = client === 'postgres' ? {
    afterCreate: (conn: any, done: (err: Error | null, conn: any) => void) => {
      conn.query('GRANT ALL ON SCHEMA public TO CURRENT_USER', (err: Error | null) => {
        done(null, conn);
      });
    },
  } : undefined;

  return {
    connection: {
      client,
      connection,
      useNullAsDefault: true,
      ...(pool ? { pool } : {}),
    },
  };
};
