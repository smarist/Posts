import React from 'react'
import PostList from '@/components/posts-list'
import AddPostForm from '@/components/add-post-form';

const PostsPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   
    const posts = await res.json()
 
    return (
        <main className="text-center pt-16 px-5">
          <AddPostForm />
          <h1 className='text-5xl font-semibold mb-7'>All Posts</h1>
          <PostList posts={posts}/>
        </main>
      )
}

export default PostsPage
