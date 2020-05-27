import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1),
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
          lineHeight: rhythm(2),
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
        marginBottom: rhythm(1.6),
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
