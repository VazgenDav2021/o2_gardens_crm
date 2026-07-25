import type { Core } from '@strapi/strapi';
import { seedMenu } from './seed/seedMenu';

export default {
  register({}: { strapi: Core.Strapi }) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      await seedMenu(strapi);
    } catch (err) {
      strapi.log.error('[seed] Failed:', err);
    }
  },
};
