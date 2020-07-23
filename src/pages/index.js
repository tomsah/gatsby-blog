import React from 'react'
import {Link} from 'gatsby'
import usePosts from '../hooks/use-posts'

import Layout from '../components/layout'
import PostPreview from '../components/post-preview'
import Hero from '../components/hero'

export default () => {
  const posts = usePosts()

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my Blog</h2>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}
