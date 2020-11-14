import React from "react"
import { Link } from "gatsby"

import styles from "./newsletter-link.touch.module.css"

export default function NewsletterLink() {
  return (
    <div
      className={styles.NewsletterLink}
      style={{
        fontFamily: "var(--secondaryFontFamily)",
      }}
    >
      <Link to="/subscribe">
        Subscribe for my monthly updates delivered to your email.
      </Link>
    </div>
  )
}
