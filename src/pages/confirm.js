import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Confirm = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Confirm your subscription at webup.org/blog" />
      <article>
        <h1
          style={{
            fontFamily: "var(--secondaryFontFamily)",
          }}
        >
          Thank you for joining
        </h1>
        <p>
          We are almost there...
          <br />
          <span role="img" aria-label="envelope">
            📩
          </span>{" "}
          &nbsp;Check your Inbox for the confirmation link.
        </p>
      </article>
    </Layout>
  )
}

export default Confirm

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
