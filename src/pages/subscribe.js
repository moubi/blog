import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

const Subscribe = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Subscribe for webup.org/blog's newsletter"
        meta={[
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:image`,
            content: siteUrl + data.avatar.childImageSharp.fixed.src,
          },
        ]}
      />
      <article>
        <Newsletter />
      </article>
    </Layout>
  )
}

export default Subscribe

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
