import React, { useState, useEffect, useCallback } from "react"
import Newsletter from "./newsletter"
import { rhythm } from "../utils/typography"
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
        }, 40000)
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
            right: `${rhythm(1)}`,
          }}
        />
        <Newsletter />
      </div>
    </div>
  )
}
