import type { Core } from '@strapi/strapi';
import { menuSeedData } from './menuData';

const LOCALES = ['ru', 'hy'] as const;

export async function seedMenu(strapi: Core.Strapi) {
  const existingCount = await strapi.documents('api::sub-category.sub-category').count({});
  if (existingCount > 0) {
    strapi.log.info(`[seed] ${existingCount} sub-categories already exist, skipping`);
    return;
  }

  const categories = await strapi.documents('api::category.category').findMany({
    locale: 'en',
    status: 'published',
    fields: ['documentId', 'title', 'slug'],
  });

  strapi.log.info(`[seed] Found ${categories.length} categories`);
  if (categories.length === 0) {
    strapi.log.warn('[seed] No published categories found, skipping seed');
    return;
  }

  let subCatCount = 0;
  let productCount = 0;

  for (const seedEntry of menuSeedData) {
    const matched = categories.find((cat) =>
      cat.slug &&
      seedEntry.slugHints.some(
        (hint) =>
          cat.slug!.toLowerCase().includes(hint) ||
          hint.includes(cat.slug!.toLowerCase())
      )
    );

    if (!matched) {
      strapi.log.warn(`[seed] No category matched hints: ${seedEntry.slugHints.join(', ')}`);
      continue;
    }

    strapi.log.info(`[seed] Seeding "${matched.title}" → ${seedEntry.subCategories.length} sub-categories`);

    for (const subData of seedEntry.subCategories) {
      const enSub = await strapi.documents('api::sub-category.sub-category').create({
        data: {
          title: subData.en.title,
          subtitle: subData.en.subtitle,
          slug: subData.slug,
          sortOrder: subData.sortOrder,
          category: { connect: [{ documentId: matched.documentId }] },
        } as any,
        locale: 'en',
        status: 'published',
      });

      for (const locale of LOCALES) {
        await strapi.documents('api::sub-category.sub-category').update({
          documentId: enSub.documentId,
          locale,
          data: {
            title: subData[locale].title,
            subtitle: subData[locale].subtitle,
          } as any,
          status: 'published',
        });
      }

      subCatCount++;

      for (const prodData of subData.products) {
        const enProd = await strapi.documents('api::product.product').create({
          data: {
            name: prodData.en.name,
            description: prodData.en.description,
            price: prodData.price,
            isAvailable: true,
            sortOrder: prodData.sortOrder,
            subCategory: { connect: [{ documentId: enSub.documentId }] },
          } as any,
          locale: 'en',
          status: 'published',
        });

        for (const locale of LOCALES) {
          await strapi.documents('api::product.product').update({
            documentId: enProd.documentId,
            locale,
            data: {
              name: prodData[locale].name,
              description: prodData[locale].description,
            } as any,
            status: 'published',
          });
        }

        productCount++;
      }
    }
  }

  strapi.log.info(`[seed] Done: ${subCatCount} sub-categories, ${productCount} products created`);
}
