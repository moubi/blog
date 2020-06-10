import React from "react"
import { rhythm } from "../utils/typography"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default function Share({ postDetails, location }) {
  const postURL = encodeURIComponent(location.href)
  const postTitle = encodeURIComponent(`"${postDetails.title}" by @moubi`)
  const hackerNewsId = postDetails.hackerNewsId

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
        href={`http://twitter.com/share?text=${postTitle}&url=${postURL}`}
      >
        Twitter
      </OutboundLink>
      {" • "}
      {hackerNewsId && (
        <>
          <OutboundLink
            target="_blank"
            rel="noreferrer"
            href={`https://news.ycombinator.com/item?id=${hackerNewsId}`}
          >
            HackerNews
          </OutboundLink>
          {" • "}
        </>
      )}
      <OutboundLink
        target="_blank"
        rel="noreferrer"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${postURL}`}
      >
        Linkedin
      </OutboundLink>
    </p>
  )
}
