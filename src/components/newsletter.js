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
        <h2 className={styles.heading}>Join the mailing list</h2>
        <p>
          Get updates on writings and tools I am involved in. React, javascript
          and front-end.
        </p>
      </div>
      <form className={styles.form}>
        <input
          style={{
            border: "var(--borderInput)",
          }}
          type="text"
          placeholder="Name"
        />
        <input
          style={{
            border: "var(--borderInput)",
          }}
          type="text"
          placeholder="Email"
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
