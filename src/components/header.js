import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    if (
      isMobileView !==
      window.matchMedia("screen and (max-width: 600px)").matches
    ) {
      setIsMobileView(
        window.matchMedia("screen and (max-width: 600px)").matches
      )
    }
  }, [isMobileView])

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...(isMobileView
            ? {
                fontSize: rhythm(1),
                lineHeight: rhythm(2.3),
              }
            : scale(0.9)),
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: "var(--secondaryFontFamily)",
          lineHeight: isMobileView ? rhythm(2) : rhythm(1.5),
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <header
      style={{
        marginBottom: isMobileView ? rhythm(0.5) : rhythm(1.6),
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      {header}
      <span>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <a
              style={{
                ...scale(0.5),
                boxShadow: `none`,
                cursor: `pointer`,
              }}
              href="/"
              onClick={e => {
                e.preventDefault()
                toggleTheme(theme === "dark" ? "light" : "dark")
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </a>
          )}
        </ThemeToggler>
      </span>
    </header>
  )
}

export default Header
