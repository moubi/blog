import React from "react"
import { rhythm } from "../utils/typography"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default function Share({ postDetails, location }) {
  const postURL = encodeURIComponent(location.href)
  const { hackerNewsId, reddit } = postDetails

  return (
    <p
      style={{
        textAlign: "center",
        marginTop: rhythm(2),
      }}
    >
      Discuss on: &nbsp;&nbsp;
      <OutboundLink
        target="_blank"
        rel="noreferrer"
        href={`https://mobile.twitter.com/search?q=${postURL}`}
      >
        Twitter
      </OutboundLink>
      {hackerNewsId && (
        <>
          {" • "}
          <OutboundLink
            target="_blank"
            rel="noreferrer"
            href={`https://news.ycombinator.com/item?id=${hackerNewsId}`}
          >
            HackerNews
          </OutboundLink>
        </>
      )}
      {reddit && (
        <>
          {" • "}
          <OutboundLink
            target="_blank"
            rel="noreferrer"
            href={`https://reddit.com/${reddit}`}
          >
            HackerNews
          </OutboundLink>
        </>
      )}
    </p>
  )
}
