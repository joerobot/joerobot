import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme(":root", {
  color: {
    background: "hsl(37deg 36% 95%)",
    backgroundAccent: "hsl(37deg 36% 85%)",
    code: "hsl(37deg 36% 90%)",
    text: "hsl(0deg 5% 14%)",
    muted: "hsl(37deg 15% 22%)",
    blockquote: "hsl(87deg 25% 25%)",
    link: {
      base: "hsl(228deg 60% 50%)",
      hover: "hsl(228deg 70% 30%)",
      visited: "hsl(257deg 55% 57%)",
    },
    selection: "hsl(87deg 25% 60%)",
  },
  font: {
    body: "Erode, serif",
    display: "Satoshi, sans-serif",
    mono: `
      "SFMono-Regular",
      Consolas,
      "Liberation Mono",
      Menlo,
      Courier,
      monospace
    `,
  },
  fontSizes: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2.125rem",
    "3xl": "3rem",
    "4xl": "3.75rem",
    "5xl": "6rem",
  },
})
