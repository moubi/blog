import React, { useEffect, useState } from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Image from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useSiteMetadata()
  const { author, social } = data.site.siteMetadata
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    if (
      isMobileView !==
      window.matchMedia("screen and (max-width: 600px)").matches
    ) {
      setIsMobileView(
        window.matchMedia("screen and (max-width: 600px)").matches
      )
    }
  }, [isMobileView])

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: isMobileView ? 0 : rhythm(1),
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
        Blog by <OutboundLink href={social.about}>{author.name}</OutboundLink> (
        <OutboundLink href={`https://twitter.com/${social.twitter}`}>
          twitter
        </OutboundLink>
        {`, `}
        <OutboundLink href={`https://github.com/${social.github}`}>
          github
        </OutboundLink>
        ).
        <br />
        {author.summary}
      </p>
    </div>
  )
}

export default Bio
