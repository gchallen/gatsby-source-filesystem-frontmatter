module.exports = {
  plugins: [
    `gatsby-transformer-asciidoc`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // options from gatsby-source-filesystem are supported
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        frontMatter: true, // read frontmatter from files in this directory
      },
    },
  ],
}
