import React from "react"
import { graphql } from "gatsby"

export default function({ data: { asciidoc } }) {
  return (
    <main>
      <h1>{asciidoc.document.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: asciidoc.html }} />
    </main>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    asciidoc(id: { eq: $id }) {
      document {
        title
      }
      html
    }
  }
`
