import React from "react"
import { rhythm } from "../utils/typography"

import styles from "./newsletter.module.css"

export default function Newsletter() {
  return (
    <section className={styles.container}>
      <section className={styles.one}>
        <span role="img" aria-label="Envelope icon" className={styles.logo}>
          📩
        </span>
        <h2 className={styles.heading}>Join the mailing list</h2>
        <p>
          Get updates about writings and open source projects I am working on.
          React, javascript and front-end.
        </p>
        <form>
          <input type="text" placeholder="Enter your email" />
          <br />
          <button className={styles.btn}>subscribe</button>
        </form>
      </section>
      <section className={styles.two}>
        <h3>thank you for subscribing !</h3>
        <div className={styles.close}></div>
      </section>
    </section>
  )
}
