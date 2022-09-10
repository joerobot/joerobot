import { style, styleVariants } from "@vanilla-extract/css"

export const layout = style({
  display: "flex",
  paddingBlock: "2rem",
  minHeight: "100vh",

  "@media": {
    "screen and (min-width: 768px)": {
      paddingBlock: "4rem",
    },
  },
})

export const content = style({
  display: "flex",
  flexDirection: "column",
  boxSizing: "content-box",
  marginInline: "auto",
  maxInlineSize: "90ch",
  paddingInline: "2rem",

  "@media": {
    "screen and (min-width: 768px)": {
      paddingInline: "4rem",
    },
    "screen and (min-width: 1000px)": {
      marginInlineStart: "12%",
    },
  },
})

export const layoutTypes = styleVariants({
  base: [content, {}],
  center: [
    content,
    {
      justifyContent: "center",
    },
  ],
})
