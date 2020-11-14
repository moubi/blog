import React, { useEffect, useState } from "react"
import { rhythm } from "../utils/typography"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
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
