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
    fontWeight: 800,
    color: "var(--textTitle)",
  },
  "h2, h3, h4, h5, h6, li": {
    color: "var(--textNormal)",
  },
  h4: {
    textTransform: "none",
  },
  h5: {
    fontSize: typography.rhythm(0.5),
  },
  "header h3": {
    fontWeight: 800,
    color: "var(--textLink)",
  },
  small: {
    color: "var(--textNormal)",
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
