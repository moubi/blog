module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `webup.org/blog`,
    author: {
      name: `Miroslav Nikolov`,
      summary: `My two cents on Javascript, React and Open source.`,
    },
    description: `A blog about React, front-end, open source. Personal perspective, thoughts and solutions of common challenges as a web developer`,
    siteUrl: `https://webup.org/blog`,
    social: {
      twitter: `moubi`,
      github: `moubi`,
      about: `https://webup.org`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`fetch`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-161687762-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog by Miroslav Nikolov`,
        short_name: `webup.org/blog`,
        description: `A blog about React, front-end, open source by Miroslav Nikolov`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
