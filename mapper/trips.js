const config = require('config');

const mapper = (trip) => {
  const baseUrl = config.get('assetsBaseUrl');
  const image = {
    url: `${baseUrl}${trip.image.fileName}.jpg`,
  };

  return {
    ...trip,
    image,
  };
};

module.exports = mapper;
