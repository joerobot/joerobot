import Link from "next/link"
import Arrow from "../icons/arrow.svg"
import {header, title, backButton} from "./page-header.css"


export const PageHeader = ({children}) => {

  return (
    <header className={header}>
      <h1 className={title}>Posts</h1>
      <div>
        <Link className={backButton} href="/">
          <Arrow /> Back
        </Link>
      </div>
    </header>
  )
}
