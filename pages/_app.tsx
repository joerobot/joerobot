import { MDXProvider } from "@mdx-js/react"
import Image from "next/image"
import Head from "next/head"
import "../styles/theme.css.ts"
import "../styles/globals.css.ts"
import "../styles/reset.css"
import { Layout } from "../components/Layout"
import {
  Anchor,
  Paragraph,
  Heading,
  Pre,
  Code,
  UL,
  Blockquote,
  HR,
  OL,
} from "../components/Text"

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
)

const components = {
  img: ResponsiveImage,
  a: Anchor,
  p: Paragraph,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  pre: Pre,
  code: Code,
  ul: UL,
  ol: OL,
  blockquote: Blockquote,
  hr: HR,
}

function MyApp({ Component, pageProps }: any) {
  const layoutType = Component.layoutType

  return (
    <MDXProvider components={components}>
      <Layout type={layoutType}>
        <Head>
          <meta name="viewport" content="width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}

export default MyApp
