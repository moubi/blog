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
          Welcome and thank you for your trust
        </h1>
        <p>
          Expect newsletter issues
          <strong> 1-2 times a month</strong>.
        </p>
        <p>
          Wonder what to continue with? <br />
          Here are some readings others have appreciated:
        </p>
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
        <p>
          Share the blog (
          <a
            href={`${siteUrl}/blog`}
            title="Front-end, React, Programming — blog by Miroslav Nikolov"
          >
            {siteUrl}/blog
          </a>
          ) with your peers.
        </p>
        <p>
          <i>You won't receive any personal stuff or spam.</i>
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
