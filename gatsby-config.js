module.exports = {
  pathPrefix: "/gatsby-github-blog",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby with Markdown",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-theme-ui",
  ],
};
