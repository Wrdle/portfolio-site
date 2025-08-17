import React from 'react';

export default function ArticleList({posts}) {
  if (posts.length <= 0) {
    return NoArticlesYet()
  }

  return (
    <div className="space-y-2">
      {posts.map((post, index) => <Post post={post} key={index}/>)}
    </div>
  );
}

function NoArticlesYet() {
  return (
    <div className="my-20">
      <p className="text-center font-bold text-2xl">This is a bit awkward, I haven't actually posted anything yet...
        😅</p>
    </div>
  )
}

function Post({post}) {
  return (
    <div>
      <br/>
      <a href={"/blog/posts/" + post.slug}>
        <p className="text-gray-400">{post.formattedDate} – ☕ {post.readingTimeText}</p>
        <h1 className="text-3xl font-extrabold my-1.5 underline decoration-sky-500 hover:decoration-4">{post.title}</h1>
        <p>{post.excerpt}</p>
      </a>
    </div>
  );
}
