import React from "react"
import { rhythm } from "../utils/typography"

const NewsletterConfirm = () => {
  return (
    <section
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `0 ${rhythm(1)}`,
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: "var(--secondaryFontFamily)",
            marginTop: 0,
          }}
        >
          Thank you for joining
        </h2>
        <p
          style={{
            padding: "0",
          }}
        >
          I hope this newsletter is useful and interesting.
          <br />
          <span role="img" aria-label="envelope">
            📩
          </span>{" "}
          &nbsp;Check your Inbox.
        </p>
      </div>
    </section>
  )
}

export default NewsletterConfirm
