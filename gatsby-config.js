/* eslint @typescript-eslint/camelcase: 0 */
// We set a custom eslint override since these are plugin configurations
// so we can't force everything to be camelcase
module.exports = {
  siteMetadata: {
    title: `Propguard`,
    description: `A webapp that teaches people how to start writing basic flight code with technologies like PX4, MAVSDK, and Python.`,
    author: `Multirotor Design Team`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    /*
    I'm just keeping this here to see if we'll need this for images in the future
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    */
  ]
};
