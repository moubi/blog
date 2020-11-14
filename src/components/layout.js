import React from "react"
import { rhythm } from "../utils/typography"
import Header from "./header"
import Footer from "./footer"

const isMobileView = window.matchMedia("screen and (max-width: 600px)").matches

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const padding = isMobileView
    ? `0 ${rhythm(3 / 4)} ${rhythm(0.5)} ${rhythm(3 / 4)}`
    : `${rhythm(1.5)} ${rhythm(3 / 4)}`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding,
      }}
    >
      <Header location={location} title={title} />
      <main>{children}</main>
      {location.pathname === rootPath && <Footer />}
    </div>
  )
}

export default Layout
