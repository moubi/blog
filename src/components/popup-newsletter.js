import React, { useState, useEffect, useCallback } from "react"
import { rhythm } from "../utils/typography"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import NewsletterConfirm from "./newsletter-confirm"

import styles from "./popup-newsletter.module.css"

export default function PopupNewsletter() {
  const [isShown, setIsShown] = useState(false)
  const [success, setSuccess] = useState(false)

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

  const handleSubmit = e => {
    e.preventDefault()
    const email = encodeURIComponent(e.target.querySelector("#MERGE0").value)

    // Since the request is to another server (not set for CORS)
    // it is not possible to read the response, so I assume it was
    // a success
    fetch(
      `https://webup.us18.list-manage.com/subscribe/post-json?u=a8b6e7feef85415df77a72883&id=a1d768b4bc&MERGE0=${email}&c=?`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      setSuccess(true)

      trackCustomEvent({
        // string - required - The object that was interacted with (e.g.video)
        category: "Subscribe form submitted (popup)",
        // string - required - Type of interaction (e.g. 'play')
        action: "submit",
        // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
        label: email,
      })
    })
  }

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
      {success ? (
        <NewsletterConfirm />
      ) : (
        <>
          <p>
            <span
              role="img"
              aria-label="Hello"
              style={{ display: "block", textAlign: "center" }}
            >
              👋
            </span>
            I hope you find the current read useful.
          </p>
          <p>
            If so, consider joining the newsletter too. It covers{" "}
            <strong>front-end code</strong> and <strong>human</strong>{" "}
            challenges I face working on large-user-base apps.
          </p>
          <form
            action="https://webup.us18.list-manage.com/subscribe/post"
            method="post"
            onSubmit={handleSubmit}
          >
            <input
              aria-label="Mailchimp api field 1"
              type="hidden"
              name="u"
              value="a8b6e7feef85415df77a72883"
            />
            <input
              aria-label="Mailchimp api field 2"
              type="hidden"
              name="id"
              value="a1d768b4bc"
            />
            <input
              aria-label="Email field"
              style={{
                border: "var(--borderInput)",
              }}
              required
              type="email"
              placeholder="Email"
              name="MERGE0"
              id="MERGE0"
            />
            <br />
            <button
              className={styles.btn}
              style={{
                color: "var(--textButton)",
              }}
            >
              SUBSCRIBE
            </button>
            <p>Monthly. No spam. No plagiarism.</p>
          </form>
        </>
      )}
    </div>
  )
}
