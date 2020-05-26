import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useSiteMetadata()
  const { author, social } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Blog by <a href="https://webup.org">{author.name}</a> (<a href={`https://twitter.com/${social.twitter}`}>
          twitter
        </a>
        {`, `}
        <a href={`https://github.com/${social.github}`}>
          github
        </a>).
        <br />
        {author.summary}
      </p>
    </div>
  )
}

export default Bio
