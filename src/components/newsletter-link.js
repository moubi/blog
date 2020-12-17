import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

import styles from "./newsletter-link.module.css"

export default function NewsletterLink({ isInBlogPost }) {
  return (
    <p
      className={styles.NewsletterLink}
      style={{
        fontFamily: "var(--secondaryFontFamily)",
        marginBottom: isInBlogPost ? rhythm(1.7) : 0,
      }}
    >
      <Link to="/subscribe">Get my answers</Link> on real code and human
      challenges at work.
    </p>
  )
}
