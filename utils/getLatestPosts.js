import fs from 'fs'
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "pages", 'posts');

export const getLatestPosts = () => {
  const filenames = fs.readdirSync(postsDirectory)

  const allPosts = filenames.filter(f => path.extname(f) === ".mdx").map(file => {
    const slug = file.replace(/\.mdx$/, '');

    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);


    return {
      slug,
      ...matterResult.data,
    }
  })
  return allPosts
}
