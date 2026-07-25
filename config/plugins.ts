export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('DO_SPACES_KEY'),
        secretAccessKey: env('DO_SPACES_SECRET'),
        endpoint: env('DO_SPACES_ENDPOINT', 'https://fra1.digitaloceanspaces.com'),
        region: env('DO_SPACES_REGION', 'fra1'),
        params: {
          Bucket: env('DO_SPACES_BUCKET', 'o2gardens-media'),
          ACL: 'public-read',
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'color-picker': {
    enabled: true,
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      landingPage: true,
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
