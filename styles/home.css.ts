import { style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const title = style({
  fontSize: vars.fontSizes["5xl"],

  "::after": {
    content: ".",
  },
})

export const subHeading = style({
  fontWeight: "normal",
})

export const nav = style({
  marginBlockStart: "3rem",
})

export const navLink = style({
  fontFamily: vars.font.display,
  fontSize: vars.fontSizes["2xl"],
  color: vars.color.blockquote,
  textDecoration: "none",
  display: "inline-block",
  transformOrigin: "bottom left",
  opacity: "0.6",
  transition: "transform 200ms ease-out, opacity 200ms ease-out",

  ":hover": {
    transform: "scale(1.1) translate(0.25rem, -0.125rem)",
    opacity: "1",
  },

  "::before": {
    content: "/",
  },

  "::after": {
    content: ".",
  },
})
