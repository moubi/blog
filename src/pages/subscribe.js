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
        <p>Some readings others have appreciated:</p>
        <ul>
          <li>
            <a
              href="/react-device-based-code-split/"
              title="How to split your React app on the front-end so it supports both desktop and touch devices."
            >
              Thoughts on Device Based Code Split in React
            </a>{" "}
            - How to split your React app on the front-end so it supports both
            desktop and touch devices.
          </li>
          <li>
            <a
              href="/sticky-header-table-with-react-hooks/"
              title="A how-to guide on creating sticky <table /> header with React hooks."
            >
              Sticky Table Header with React Hooks
            </a>{" "}
            - A how-to guide on creating sticky &lt;table /&gt; header with
            React hooks.
          </li>
          <li>
            <a
              href="/the-emerging-ship/"
              title="How to split your React app on the front-end so it supports both desktop and touch devices."
            >
              The Emerging Ship
            </a>{" "}
            - How can developers save a failing project.
          </li>
        </ul>
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
