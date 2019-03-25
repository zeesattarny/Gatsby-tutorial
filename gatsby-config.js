module.exports = {
    siteMetadata: {
        title: `Gatsby`,
        siteUrl: `https://www.gatsbyjs.org`,
        description: `Blazing fast modern site generator for React`,
      },
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }