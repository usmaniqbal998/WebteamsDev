module.exports = {
  siteMetadata: {
    title: `Webteams`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:100,300,400,700`, `Cormorant\:300,400,400,500,600,700`],
        display: 'swap',
      },
    },
  ],
};
