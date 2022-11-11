import configureMDX from "@next/mdx"
import remarkFrontmattter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"


const withMDX = configureMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmattter,
      remarkMdxFrontmatter
    ],
    providerImportSource: '@mdx-js/react',
  },
})

const withVanillaExtract = createVanillaExtractPlugin();


const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  }
}

export default withVanillaExtract(withMDX(nextConfig))

