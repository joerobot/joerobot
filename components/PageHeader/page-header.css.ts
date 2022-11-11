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
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: vars.color.text,
  textDecoration: "none",
  fontFamily: vars.font.display,

  ":visited": {
    color: vars.color.text
  }
}])
