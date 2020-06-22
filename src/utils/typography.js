import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => ({
  "a.gatsby-resp-image-link": {
    boxShadow: `none`,
  },
  a: {
    color: "var(--textLink)",
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  "a.anchor": {
    boxShadow: "none",
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: "var(--textLink)",
  },
  hr: {
    background: "var(--hr)",
  },
  p: {
    color: "var(--textNormal)",
  },
  h1: {
    fontWeight: 900,
    color: "var(--textTitle)",
  },
  "h2, h3, h4, h5, h6, li": {
    position: "relative",
    color: "var(--textNormal)",
  },
  "a.header-link": {
    position: "absolute",
    right: "100%",
    paddingRight: "4px",
    display: "none",
  },
  "h2:hover a.header-link, h3:hover a.header-link, h4:hover a.header-link, h5:hover a.header-link, h6:hover a.header-link": {
    display: "inline-block",
    boxShadow: "none",
  },
  h4: {
    textTransform: "none",
  },
  h5: {
    fontSize: typography.rhythm(0.5),
  },
  "header h3": {
    color: "var(--textLink)",
    fontFamily: "var(--secondaryFontFamily)",
  },
  small: {
    color: "var(--textNormal)",
  },
  strong: {
    fontWeight: 900,
  },
  sup: {
    fontSize: typography.rhythm(0.45),
  },
})
delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
