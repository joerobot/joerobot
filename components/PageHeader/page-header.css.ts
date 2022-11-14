import {style} from "@vanilla-extract/css"
import {a, headings} from "../Text/text.css"
import { vars } from "../../styles/theme.css"

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginBlockEnd: "3rem",
})

export const title = style([headings.h1, {
  marginBlockEnd: 0,
}])

export const backButton = style([a, {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingBlock: "0.25rem",
  paddingInlineStart: "0.25rem",
  paddingInlineEnd: "0.5rem",
  borderRadius: "0.25rem",
  color: vars.color.muted,
  textDecoration: "none",
  fontFamily: vars.font.display,
  transform: "translateX(-0.25rem)",
  transition: "transform 200ms ease-out",

  ":visited": {
    color: vars.color.muted
  },

  ":hover": {
    backgroundColor: vars.color.backgroundAccent,
    transform: "translateX(0)",
  }
}])
