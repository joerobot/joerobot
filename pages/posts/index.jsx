import {PageHeader} from "../../components/PageHeader"
import {getLatestPosts} from "../../utils/getLatestPosts"



function BlogIndex({posts}) {
  return (
    <>
    <PageHeader />

    {posts.map(post => (
      <p key={post.slug}>{post.slug}</p>
    ))}
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const posts = getLatestPosts()

  console.log(posts)

  return {
    props: {
      posts
    }
  }
}

export default BlogIndex
