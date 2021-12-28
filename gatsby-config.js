module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Mountain",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Notes`,
        path: `${__dirname}/contents/notes`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-layout`,
      // options: {
      //   component: require.resolve(`./src/layout/index.js`),
      // },
    },
  ],
};
