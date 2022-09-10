import { a, headings, code, pre, p, list, blockquote, hr } from "./text.css"


const styles = {
  a,
  p,
  code,
  pre,
  ul: list,
  ol: list,
  blockquote,
  hr,
  ...headings,
}

export const Text = ({ as = "span", children, ...props }) => {
  const Element = as

  return <Element className={styles[as] || null} {...props}>{children}</Element>
}

export const Anchor = (props) => <Text as="a" {...props} />
export const Paragraph = (props) => <Text as="p" {...props} />

export const Heading = ({ level, ...props }) => <Text as={`h${level}`} {...props} />

Heading.H1 = function H1(props) { return <Heading level={1} {...props} /> }
Heading.H2 = function H2(props) { return <Heading level={2} {...props} /> }
Heading.H3 = function H3(props) { return <Heading level={3} {...props} /> }
Heading.H4 = function H4(props) { return <Heading level={4} {...props} /> }
Heading.H5 = function H5(props) { return <Heading level={5} {...props} /> }
Heading.H6 = function H6(props) { return <Heading level={6} {...props} /> }


export const Code = (props) => <Text as="code" {...props} />
export const Pre = (props) => <Text as="pre" {...props} />

export const UL = (props) => <Text as="ul" {...props} />
export const OL = (props) => <Text as="ol" {...props} />

export const Blockquote = (props) => <Text as="blockquote" {...props} />

export const HR = (props) => <Text as="hr" {...props} />
