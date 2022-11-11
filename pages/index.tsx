import Head from "next/head"
import Link from "next/link"
import { Text } from "../components/Text"
import * as textStyles from "../components/Text/text.css"
import { body, display } from "../styles/typography.css"
import { title, subHeading, nav, navLink } from "../styles/home.css"

const Home = () => {
  return (
    <div>
      <Head>
        <title>joerobot | web developer</title>
        <meta name="description" content="joerobot | web developer" />
      </Head>

      <div className={display}>
        <Text as="h1" className={`${title}`}>
          joerobot
        </Text>

        <div className={body}>
          <Text as="h2" className={`${textStyles.p} ${subHeading}`}>
            web developer
          </Text>
        </div>

        <nav className={nav}>
          <Link className={navLink} href="/posts">
            blog
          </Link>
        </nav>
      </div>
    </div>
  )
}

Home.layoutType = "center"

export default Home
