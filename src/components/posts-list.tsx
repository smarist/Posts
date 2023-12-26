import React from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
    return (
        <main className="px-7 pt-24 text-center">
            <div className=''>
                {posts.map(post => (
                     <div key={post.id}>
                     <h1 className='text-2xl font-semibold mb-7'>{post.title}</h1>
                     <p className='max-w-[700px] mx-auto'>{post.body}</p>
                     </div> 
                ))}
            </div>
            </main>
    );
};

export default PostList;
