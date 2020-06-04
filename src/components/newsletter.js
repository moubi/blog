import React from "react"
import styles from "./newsletter.module.css"

export default function Newsletter() {
  return (
    <section
      className={styles.container}
      style={{
        backgroundColor: "var(--bgHighlight)",
      }}
    >
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
          Get latest updates from my journey as javascript dev. React and
          javascript tools, recipes, everyday challenges.
        </p>
      </div>
      <form
        className={styles.form}
        action="https://webup.us18.list-manage.com/subscribe/post"
        method="post"
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
    </section>
  )
}
