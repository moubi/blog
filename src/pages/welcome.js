import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Confirm = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Welcome to webup.org/blog mailing list" />
      <article>
        <h1
          style={{
            fontFamily: "var(--secondaryFontFamily)",
          }}
        >
          Welcome to webup.org/blog
        </h1>
        <p>
          I write about <strong>practical</strong> React and Javascript topics.
        </p>
        <p>
          That includes solutions on programming 
          <strong>challenges</strong> you have, <strong>how-to</strong> guides
          and maintaining open source.
        </p>
        <p>
          You will not receive any personal stuff or spam. Also feel free to
          reply to my mails.
        </p>
        <p>
          For summarized updates and discussions,{" "}
          <a href="https://twitter.com/mobui" target="_blank" rel="noreferrer">
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
