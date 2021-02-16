import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { rhythm } from "../utils/typography"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => {
  const data = useSiteMetadata()
  const { social } = data.site.siteMetadata

  return (
    <footer style={{ marginTop: rhythm(4) }}>
      <p>
        <a title="webup.org/blog's newsletter" href="subscribe">
          newsletter
        </a>
        {" • "}
        <OutboundLink href={social.about} target="_blank" rel="noreferrer">
          about
        </OutboundLink>
        {" • "}
        <a title="webup.org/blog's rss" href="rss.xml">
          rss
        </a>
      </p>
    </footer>
  )
}

export default Footer
