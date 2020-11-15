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
      <Link to="/subscribe">Subscribe</Link> for my monthly updates delivered to
      your email.
    </p>
  )
}