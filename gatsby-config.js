module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'localhost/wordpress',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        // Set to true to debug endpoints on 'gatsby build'
        includedRoutes: [
          '**/posts',
          '**/pages',
          '**/media',
          '**/categories',
          '**/tags',
          '**/taxonomies',
          '**/users', // uncomment this and watch the warning above reappear!
          '**/menus',
        ],
        verboseOutput: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: false,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-lazy-image-url`],
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
