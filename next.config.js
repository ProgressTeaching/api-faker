module.exports = {
  async headers() {
    return [
      {
        source: '/api/:slug',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
}