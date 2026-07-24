export default {
  async register({ strapi }) {
    if (process.env.DATABASE_CLIENT === 'postgres') {
      try {
        await strapi.db.connection.raw('GRANT ALL ON SCHEMA public TO CURRENT_USER');
        strapi.log.info('[init] PostgreSQL schema permissions granted');
      } catch (err) {
        strapi.log.warn('[init] Schema grant skipped:', err.message);
      }
    }
  },
  bootstrap(/*{ strapi }*/) {},
};
