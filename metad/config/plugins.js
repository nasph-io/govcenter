module.exports = ({ env }) => ({

  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'carol@skalena.com',
        defaultReplyTo: 'carol@skalena.com',
        testAddress: 'carol@skalena.com',
      },
    },
  },

});
