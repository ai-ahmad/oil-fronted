// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'oiltrade.uz',
          pathname: '/templates/oiltrade/images/**',
        },
      ],
    },
  };
  