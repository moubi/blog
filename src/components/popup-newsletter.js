import React, { useState, useEffect, useCallback } from "react"
import Newsletter from "./newsletter"
import { rhythm } from "../utils/typography"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import styles from "./popup-newsletter.module.css"

export default function PopupNewsletter() {
  const [isShown, setIsShown] = useState(false)

  const handleClose = useCallback(() => {
    setIsShown(false)
  }, [setIsShown])

  // Display popup once per user after 1min
  useEffect(() => {
    if (window.localStorage) {
      const shown = window.localStorage.getItem("webup.org")

      if (!shown) {
        setTimeout(() => {
          setIsShown(true)
          window.localStorage.setItem("webup.org", "shown")

          trackCustomEvent({
            // string - required - The object that was interacted with (e.g.video)
            category: "Popup subscribe form",
            // string - required - Type of interaction (e.g. 'play')
            action: "2:10 min passed",
          })
        }, 420000)
      }
    }
  }, [setIsShown])

  if (!isShown) {
    return null
  }

  return (
    <div className={styles.container}>
      <div
        style={{
          maxWidth: rhythm(24),
          padding: `0 ${rhythm(3 / 4)}`,
        }}
      >
        <i
          role="presentation"
          className={styles.close}
          onClick={handleClose}
          style={{
            right: `${rhythm(1.2)}`,
          }}
        />
        <Newsletter />
      </div>
    </div>
  )
}
