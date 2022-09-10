import { createVar, style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const fontFamily = createVar()
export const fontWeight = createVar()

export const body = style({
  vars: {
    [fontFamily]: vars.font.body,
  },
})

export const display = style({
  vars: {
    [fontFamily]: vars.font.display,
  },
})
