import React, { useState, useEffect, useCallback } from "react"
import { rhythm } from "../utils/typography"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import styles from "./popup-newsletter.module.css"

export default function PopupNewsletter() {
  const [isShown, setIsShown] = useState(false)

  const handleClose = useCallback(() => {
    setIsShown(false)
  }, [setIsShown])

  // Display popup once per user after 7 min
  // Only for screens >= 1280px
  useEffect(() => {
    if (
      window.localStorage &&
      window.matchMedia("screen and (min-width: 1280px)").matches
    ) {
      const shown = window.localStorage.getItem("webup.org")

      if (!shown) {
        setTimeout(() => {
          setIsShown(true)
          window.localStorage.setItem("webup.org", "shown")

          trackCustomEvent({
            // string - required - The object that was interacted with (e.g.video)
            category: "Popup subscribe form shown",
            // string - required - Type of interaction (e.g. 'play')
            action: "7 min passed",
          })
        }, 420000)
      }
    }
  }, [setIsShown])

  if (!isShown) {
    return null
  }

  return (
    <div
      className={styles.container}
      style={{
        top: rhythm(5),
        backgroundColor: "var(--bgHighlight)",
      }}
    >
      <i role="presentation" className={styles.close} onClick={handleClose} />
      <span
        role="img"
        aria-label="Hello"
        style={{ display: "block", textAlign: "center", fontSize: rhythm(1) }}
      >
        👋
      </span>
      <p>
        Consider joining the{" "}
        <a
          href="https://webup.org/blog/subscribe"
          title="webup.org/blog's newsletter"
          target="_blank"
        >
          newsletter
        </a>
        ? It comes with useful posts like this and more.
      </p>
    </div>
  )
}
