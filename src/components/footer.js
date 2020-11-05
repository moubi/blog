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
        <OutboundLink
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noreferrer"
        >
          twitter
        </OutboundLink>{" "}
        {" • "}
        <OutboundLink
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noreferrer"
        >
          github
        </OutboundLink>{" "}
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
