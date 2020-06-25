import React, { useState } from "react"
import NewsletterConfirm from "./newsletter-confirm"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import styles from "./newsletter.module.css"

export default function Newsletter() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const name = encodeURIComponent(e.target.querySelector("#MERGE2").value)
    const email = encodeURIComponent(e.target.querySelector("#MERGE0").value)

    // Since the request is to another server (not set for CORS)
    // it is not possible to read the response, so I assume it was
    // a success
    fetch(
      `https://webup.us18.list-manage.com/subscribe/post-json?u=a8b6e7feef85415df77a72883&id=a1d768b4bc&MERGE2=${name}&MERGE0=${email}&c=?`,
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
        category: "Subscribe form",
        // string - required - Type of interaction (e.g. 'play')
        action: "submit",
        // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
        label: email,
      })
    })
  }

  return (
    <section
      className={styles.container}
      style={{
        backgroundColor: "var(--bgHighlight)",
      }}
    >
      {success ? (
        <NewsletterConfirm />
      ) : (
        <>
          <div>
            <span role="img" aria-label="Envelope icon" className={styles.logo}>
              ✉️
            </span>
            <h2
              className={styles.heading}
              style={{
                fontFamily: "var(--secondaryFontFamily)",
              }}
            >
              Join the mailing list
            </h2>
            <p>
              Get notified on the latest content. React and frontend solutions,
              how to guides, open source.
            </p>
          </div>
          <form
            className={styles.form}
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
              aria-label="Name field"
              style={{
                border: "var(--borderInput)",
              }}
              required
              type="text"
              placeholder="Name"
              name="MERGE2"
              id="MERGE2"
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
              Subscribe
            </button>
            <p>
              Practical information only.
              <br />
              Unnsubscribe at any time.
            </p>
          </form>
        </>
      )}
    </section>
  )
}
