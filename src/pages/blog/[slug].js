import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Image from '../../components/blog/CustomImage'
import path from 'path'
import CustomLink from '../../components/blog/CustomLink'
import PostLayout from '../../components/blog/PostLayout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import mdxPrism from 'mdx-prism'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
   // CustomLink provides next/link or <a>, for internal or external links
   a: CustomLink,
   Image,
   Head,
}

export default function PostPage({ source, frontMatter }) {
   return (
      <PostLayout frontMatter={frontMatter}>
         <MDXRemote {...source} components={components} />
      </PostLayout>
   )
}

export const getStaticProps = async ({ params }) => {
   const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
   const source = fs.readFileSync(postFilePath)

   const { content, data } = matter(source)

   const mdxSource = await serialize(content, {
      scope: data,
      mdxOptions: {
         remarkPlugins: [require('remark-code-titles'), import('remark-slug')],
         rehypePlugins: [mdxPrism],
      },
   })

   return {
      props: {
         source: mdxSource,
         frontMatter: data,
      },
   }
}

export const getStaticPaths = async () => {
   const paths = postFilePaths
      // Remove file extensions for page paths
      .map((path) => path.replace(/\.mdx?$/, ''))
      // Map the path into the static paths object required by Next.js
      .map((slug) => ({ params: { slug } }))

   return {
      paths,
      fallback: false,
   }
}
