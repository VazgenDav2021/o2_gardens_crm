export default {
  async register({ strapi }) {
    const isPostgres = process.env.DATABASE_CLIENT === 'postgres' || !!process.env.DATABASE_URL;
    if (isPostgres) {
      try {
        await strapi.db.connection.raw('GRANT ALL ON SCHEMA public TO CURRENT_USER');
        strapi.log.info('[init] Schema grant OK');
      } catch (err: any) {
        strapi.log.warn('[init] Schema grant skipped:', err.message);
      }
    }
  },
  bootstrap({}) {},
};
