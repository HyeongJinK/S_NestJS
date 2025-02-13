export function originalCorsConfigure() {
  const whitelist = ['localhost:3000'];

  return {
    origin: function (origin, callback) {
      if (
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'local'
      ) {
        callback(null, true);
      } else if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'GET,POST,PUT,PATCH,DELETE',
  };
};
