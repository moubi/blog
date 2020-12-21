import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Welcome = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Welcome to webup.org/blog's readers list"
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
        <h1
          style={{
            fontFamily: "var(--secondaryFontFamily)",
          }}
        >
          Welcome
        </h1>
        <p>
          You are now part of a friendly group of readers.
          <br /> I create new content
          <strong> 1-2 times a month</strong>.
        </p>
        <p>
          You will not receive any personal stuff or spam. Also feel free to
          reply to my emails.
        </p>
        <p>
          For summarized updates and discussions,{" "}
          <a href="https://twitter.com/moubi" target="_blank" rel="noreferrer">
            follow me on Twitter
          </a>
          .
        </p>
        <div align="center">
          <h2>
            <span role="img" aria-label="hello hand">
              👋
            </span>
          </h2>
        </div>
      </article>
    </Layout>
  )
}

export default Welcome

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
