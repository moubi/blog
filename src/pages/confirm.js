import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Confirm = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Thank you for subscribing at webup.org" />
      <article>
        <h1
          style={{
            fontFamily: "var(--secondaryFontFamily)",
          }}
        >
          Thank you for joining
        </h1>
        <p>
          <span role="img" aria-label="envelope">
            📩
          </span>{" "}
          &nbsp;There should be a welcome message in your Inbox. <br />I hope
          this newsletter is useful and interesting.
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
