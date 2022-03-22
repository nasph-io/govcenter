module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dca52926c065866d4f5f5f04316e8f72'),
  },
});
