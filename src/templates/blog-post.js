import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"
import Share from "../components/share"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        meta={
          post.frontmatter.featuredImage
            ? [
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                },
                {
                  name: `twitter:image`,
                  content:
                    siteUrl +
                    post.frontmatter.featuredImage.childImageSharp.fluid.src,
                },
              ]
            : []
        }
      />
      <Newsletter />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
              lineHeight: 1.2,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date} {" | ⏳ "}
            {post.fields.readingTime.text}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <Share postDetails={post.frontmatter} location={location} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer
          style={{
            marginTop: rhythm(2),
          }}
        >
          <Bio />
        </footer>
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <p style={{ "text-align": "right" }}>
        <a title="webup.org/blog's rss" href={`${siteUrl}/blog/rss.xml`}>
          rss
        </a>
      </p>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hackerNewsId
        reddit
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
