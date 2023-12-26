import React from 'react'
import PostList from '@/components/posts-list'

const PostPage = async () => {
  const res = await fetch('https://dummyjson.com/posts?limit=3');
    const data = await res.json();
  return (
    <main>
      <h1>All Posts</h1>
      <PostList />
    </main>
  )
}

export default PostPage