/* eslint @typescript-eslint/camelcase: 0 */
// We set a custom eslint override since these are plugin configurations
// so we can't force everything to be camelcase
module.exports = {
  siteMetadata: {
    title: `Propguard`,
    description: `Propguard is a webapp that teaches people how to start writing basic flight code with technologies like PX4, MAVSDK, and Python.`,
    author: `Multirotor Design Team`
  },
  pathPrefix: "/propguard",
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Propguard`,
        short_name: `propguard`,
        start_url: `/`,
        background_color: `#727272`,
        theme_color: `#727272`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    /*
    I'm just keeping this here to see if we'll need this for images in the future
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
