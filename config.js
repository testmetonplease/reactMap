

const env = {
 
  domain: 'http://10.0.2.2/',
  iosKey: {
    clientId: 'fb_ios',
    clientSecret: 'fb_ios_pass'
  },
  androidKey: {
    clientId: 'fb_android',
    clientSecret: 'fb_android_pass'
  },
  googleApi: {
    googlePlacesApi: {
      apiKey: 'AIzaSyCBq1TD65Hca8b0MQ0CFCipOjQ2N1ndSdE'
    }
  }
};

process.env.domain = env.domain;

export default env;
