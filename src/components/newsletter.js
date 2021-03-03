import React, { useState } from "react"
import NewsletterConfirm from "./newsletter-confirm"
import { trackCustomEvent, OutboundLink } from "gatsby-plugin-google-analytics"
import mailIcon from "../../content/assets/mail.svg"

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
            <h2
              className={styles.heading}
              style={{
                fontFamily: "var(--secondaryFontFamily)",
              }}
            >
              Join a front-end newsletter with well-tested content
            </h2>
            <p>
              I write about <strong>code and programming</strong> challenges
              when building software. Things I can't easily find answers to by
              just Googling.
            </p>
            <p>
              Each newsletter comes with helpful
              <strong> thoughts and links</strong> not published elsewhere and a{" "}
              <strong>sneak peek</strong> at what's next. <br />
              Sent <strong>monthly</strong>, spam-free.
            </p>
          </div>
          <img className={styles.img} src={mailIcon} alt="Newsletter icon" />
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
              placeholder="Your email"
              name="MERGE0"
              id="MERGE0"
            />
            <button
              className={styles.btn}
              style={{
                color: "var(--textButton)",
              }}
            >
              Subscribe
            </button>
          </form>
          <p className={styles.info}>
            Need to see a{" "}
            <OutboundLink
              href="https://mailchi.mp/0c360f94c1ae/issue-7-react-testing"
              title="Previous newsletter issue"
              target="_blank"
            >
              previous issue
            </OutboundLink>
            ?
          </p>
        </>
      )}
    </section>
  )
}
