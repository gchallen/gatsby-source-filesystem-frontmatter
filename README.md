# gatsby-source-filesystem-frontmatter

Adds support for reading frontmatter from any file to
[`gatsby-source-frontmatter`](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/).

## Install

`npm install --save gatsby-source-filesystem-frontmatter`

## How to use

Review the documentation and examples from
[`gatsby-source-frontmatter`](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/).

`gatsby-source-filesystem-frontmatter` adds a `frontMatter` option to
`gatsby-source-filesystem`.

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem-frontmatter`,
      options: {
        // options from gatsby-source-filesystem are supported
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
        frontMatter: true // read frontmatter from files in this directory
      },
    }
  ]
}
```

## Options

If the `frontMatter` option is set to `true`,
`gatsby-source-filesystem-frontmatter` will attempt to read YAML front matter
from each file using [`gray-matter`](https://www.npmjs.com/package/gray-matter).

Given the following file:

```asciidoc
---
author: Geoffrey Challen
---

= Test

This is a test. This is only a test.
```

You can query attributes defined in its front matter like this:

```graphql
{
  allFile {
    edges {
      node {
        frontMatter {
          author
        }
      }
    }
  }
}
```
