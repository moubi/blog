import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

const Subscribe = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Subscribe for webup.org/blog newsletter" />
      <article>
        <Newsletter />
      </article>
    </Layout>
  )
}

export default Subscribe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
