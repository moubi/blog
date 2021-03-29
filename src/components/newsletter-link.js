import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import mailIcon from "../../content/assets/mail.svg"

import styles from "./newsletter-link.module.css"

export default function NewsletterLink({ isInBlogPost = false }) {
  return (
    <p
      className={styles.NewsletterLink}
      style={{
        fontFamily: "var(--secondaryFontFamily)",
        marginBottom: isInBlogPost ? rhythm(1.7) : 0,
      }}
    >
      <img src={mailIcon} alt="Newsletter mail icon" width="30" height="30" />
      <Link to="/subscribe" title="webup.org/blog's newsletter">
        Interested in getting future updates?
      </Link>
    </p>
  )
}
