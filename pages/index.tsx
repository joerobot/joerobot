import Head from "next/head"
import { Text } from "../components/Text"
import * as textStyles from "../components/Text/text.css"
import { body, display } from "../styles/typography.css"
import { subHeading } from "../styles/home.css"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="joerobot | web developer" />
      </Head>

      <div className={display}>
        <Text as="h1">joerobot.</Text>

        <div className={body}>
          <Text as="h2" className={`${textStyles.p} ${subHeading}`}>
            web developer
          </Text>
        </div>
      </div>
    </div>
  )
}

Home.layoutType = "center"

export default Home
