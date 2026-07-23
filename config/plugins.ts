export default () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: process.env.NODE_ENV === 'development',
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'ru',
      locales: ['ru', 'en', 'hy'],
    },
  },
});
