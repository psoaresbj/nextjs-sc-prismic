module.exports = {
  // -- Access Token if the repository is not public
  // Generate a token in your dashboard and configure it here if your repository is private
  accessToken: process.env.API_TOKEN || '',

  // -- Prismic API endpoint
  // Determines which repository to query and fetch data from
  // Configure your site's access point here
  apiEndpoint: process.env.API_URL,

  // Additional helper function for Next/Link component
  hrefResolver: doc => {
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`;
    }
    if (doc.type === 'homepage') {
      return `/${doc.lang}`;
    }

    return '/';
  },

  // -- Link resolution rules
  // Manages links to internal Prismic documents
  // Modify as your project grows to handle any new routes you've made
  linkResolver: doc => {
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`;
    }
    if (doc.type === 'homepage') {
      return `/${doc.lang}`;
    }

    return '/';
  }
};
