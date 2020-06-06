import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Confirm = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Thank you for subscribing at webup.org/blog" />
      <article>
        <h1
          style={{
            fontFamily: "var(--secondaryFontFamily)",
          }}
        >
          Thank you for joining
        </h1>
        <p>
          I hope this newsletter is useful and interesting. <br />
          <span role="img" aria-label="envelope">
            📩
          </span>{" "}
          &nbsp;Check your Inbox for a welcome message.
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
