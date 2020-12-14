import React, { useState } from "react"
import NewsletterConfirm from "./newsletter-confirm"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import styles from "./newsletter.module.css"

export default function Newsletter() {
  const [success, setSuccess] = useState(false)

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
            {/* <p>
              I am sorry for interrupting your read. Hope you find the current
              writing useful.
            </p>
            <p>
              This is a one time reminder to sync for more future blogs. You can
              always find the form at the bottom of each post.
            </p> */}
            <h2
              className={styles.heading}
              style={{
                fontFamily: "var(--secondaryFontFamily)",
              }}
            >
              Join the Inner Group
            </h2>
            <p>
              Receive my <strong>monthly</strong> blogs on how to solve tough
              <strong> code</strong> and <strong>human</strong> challenges at
              work. Frontend, React and dev process knowledge that will{" "}
              <strong>help your career</strong>.
            </p>
            <p>
              Plus, get a <strong>sneak peek</strong> at what's coming next.
            </p>
            <p>Free. No spam. No plagiarism.</p>
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
              Let me in
            </button>
          </form>
        </>
      )}
    </section>
  )
}
