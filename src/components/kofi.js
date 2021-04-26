import React, { useState, useEffect } from "react"
import kofi from "../../content/assets/ko-fi.png"

export default function Kofi() {
  const [isWideEnough, setIsWideEnough] = useState(false)

  useEffect(() => {
    if (
      isWideEnough !== window.matchMedia("screen and (min-width: 840px").matches
    ) {
      setIsWideEnough(window.matchMedia("screen and (min-width: 840px").matches)
    }
  }, [isWideEnough])

  if (!isWideEnough) {
    return null
  }

  return (
    <a
      href="https://ko-fi.com/moubi"
      title="Support my work on ko-fi"
      target="_blank"
      rel="noreferrer noopener"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        display: "flex",
        backgroundColor: "#29ABE0",
        borderRadius: "50%",
        boxShadow: "rgb(0 0 0 / 40%) 0px 4px 8px",
      }}
    >
      <img
        src={kofi}
        alt="Support my work (ko-fi logo)"
        style={{
          width: "60px",
          height: "60px",
          margin: 0,
        }}
      />
    </a>
  )
}
