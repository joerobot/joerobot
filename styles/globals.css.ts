import { globalStyle } from "@vanilla-extract/css"
import { vars } from "./theme.css"

globalStyle("html, body", {
  fontFamily: vars.font.body,
  color: vars.color.text,
})

globalStyle("body", {
  backgroundColor: vars.color.background,
})

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: vars.font.display,
})

globalStyle("::selection", {
  background: vars.color.selection,
})
