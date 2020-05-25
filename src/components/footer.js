import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { rhythm } from "../utils/typography"

const Footer = () => {
  const data = useSiteMetadata()
  const { social } = data.site.siteMetadata

  return (
    <footer style={{ marginTop: rhythm(4) }}>
        <a href={`https://twitter.com/${social.twitter}`}>twitter</a> {" • "}
        <a href={`https://github.com/moubi${social.github}`}>github</a> {" • "}
        <a href={social.about}>about</a>
    </footer>
  )
}

export default Footer
