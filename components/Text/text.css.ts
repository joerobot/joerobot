import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from "../../styles/theme.css"
import { fontFamily } from "../../styles/typography.css"

export const a = style({
  color: vars.color.link.base,
  display: "inline-block",
  transition: "color 150ms ease-out",

  ":hover": {
    color: vars.color.link.hover,
  },

  ":visited": {
    color: vars.color.link.visited,
  },

  ":focus": {
    outline: "none",
    backgroundColor: vars.color.link.base,
    color: vars.color.background,
    transition: "none",
  },
})

export const p = style({
  fontSize: vars.fontSizes.md,
  lineHeight: "1.6",
  marginBlockStart: "1.25rem",
  fontFamily: fontFamily,

  selectors: {
    "blockquote > &": {
      fontSize: "inherit",
      color: "inherit",
      lineHeight: "inherit",
      marginBlock: 0,
    },
    "blockquote > p + &": {
      marginBlockStart: "1rem",
    },
  },
})

export const headings = styleVariants({
  h1: {
    fontSize: vars.fontSizes["4xl"],
    fontFamily: fontFamily,
    fontWeight: 900,
    lineHeight: "1",
    marginBlockEnd: "2rem",
  },
  h2: {
    fontSize: vars.fontSizes["3xl"],
    fontWeight: 900,
    fontFamily: fontFamily,
    lineHeight: "1.1",
    marginBlockStart: "1.5rem",
  },
  h3: {
    fontSize: vars.fontSizes["2xl"],
    fontWeight: 900,
    fontFamily: fontFamily,
    lineHeight: "1.2",
    marginBlockStart: "1.5rem",
  },
  h4: {
    fontSize: vars.fontSizes["xl"],
    fontWeight: 900,
    fontFamily: fontFamily,
    marginBlockStart: "1.25rem",
  },
  h5: {
    fontSize: vars.fontSizes["lg"],
    fontWeight: 900,
    fontFamily: fontFamily,
    marginBlockStart: "1.25rem",
  },
  h6: {
    fontSize: vars.fontSizes["md"],
    fontWeight: 900,
    fontFamily: fontFamily,
    marginBlockStart: "1.25rem",
  },
})

export const code = style({
  display: "inline-block",
  fontFamily: vars.font.mono,
  backgroundColor: vars.color.code,
  borderRadius: "0.25rem",
  paddingInline: "0.125rem",
  fontSize: "inherit",

  selectors: {
    "pre > &": {
      backgroundColor: "transparent",
      padding: 0,
    },
    "p > &": {
      fontSize: vars.fontSizes.sm,
    },
  },
})

export const pre = style({
  fontSize: vars.fontSizes.sm,
  backgroundColor: vars.color.code,
  borderRadius: "0.25rem",
  padding: "0.5rem",
  marginBlockStart: "1.25rem",
})

export const list = style({
  paddingInlineStart: "2rem",
  marginBlockStart: "1.25rem",
  marginBlockEnd: 0,

  selectors: {
    "li > &": {
      margin: 0,
    },
  },
})

export const blockquote = style({
  marginBlockStart: "1.25rem",
  display: "block",
  position: "relative",
  paddingInline: "1.25rem",
  paddingBlock: "0.25rem",
  fontSize: vars.fontSizes.lg,
  color: vars.color.blockquote,
  backgroundColor: "hsla(87deg, 50%, 25%, 15%)",
  borderRadius: "0.5rem",
  lineHeight: "1.5",

  "::before": {
    content: "",
    display: "block",
    backgroundColor: "currentColor",
    width: "0.25rem",
    position: "absolute",
    top: "0.25rem",
    bottom: "0.25rem",
    left: 0,
    borderRadius: "9999px",
  },

  selectors: {
    "blockquote > &": {
      marginBlock: 0,
    },
  },
})

export const hr = style({
  marginBlockStart: "3rem",
  backgroundColor: "currentColor",
  height: "0.25rem",
  display: "block",
  border: "none",
  width: "100%",
})
