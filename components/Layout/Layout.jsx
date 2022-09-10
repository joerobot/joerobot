import { layout, layoutTypes } from "./layout.css"


export const Layout = ({ type = "base", children }) => {
  return (
    <div className={layout}>
      <main className={layoutTypes[type]}>
        {children}
      </main>
    </div>
  )
}
