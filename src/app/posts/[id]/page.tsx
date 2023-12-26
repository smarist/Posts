import React from 'react'

type PostPageProps = {
  params: {
    id: string
  }
}
const PostPage = async ({params}: PostPageProps) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
  return (
    <main className="px-7 pt-24 text-center">
      <h2>hello ypu</h2>
      <h1 className='text-5xl font-semibold mb-7'>{data.title}</h1>
      <p className='max-w-[700px] mx-auto'>{data.body}</p>
    </main>
  )
}

export default PostPage