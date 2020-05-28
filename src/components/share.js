import React from "react"
import { rhythm } from "../utils/typography"

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
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://twitter.com/share?text=${postTitle}&url=${postURL}`}
      >
        Twitter
      </a>
      {" • "}
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://news.ycombinator.com/item?id=${hackerNewsId}`}
      >
        HackerNews
      </a>
      {" • "}
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${postURL}`}
      >
        Linkedin
      </a>
    </p>
  )
}
