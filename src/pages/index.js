import React from 'react'
import {Link} from 'gatsby'
import usePosts from '../hooks/use-posts'

import Layout from '../components/layout'
import PostPreview from '../components/post-preview'

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Home !!</h1>
      <p>Hello london</p>
      <Link to="/about">About &rarr;</Link>

      <h2>Read my Blog</h2>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
