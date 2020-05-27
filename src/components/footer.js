import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { rhythm } from "../utils/typography"

const Footer = () => {
  const data = useSiteMetadata()
  const { social } = data.site.siteMetadata

  return (
    <footer style={{ marginTop: rhythm(4) }}>
      <p>
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noreferrer"
        >
          twitter
        </a>{" "}
        {" • "}
        <a
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        {" • "}
        <a href={social.about} target="_blank" rel="noreferrer">
          about
        </a>
      </p>
    </footer>
  )
}

export default Footer
