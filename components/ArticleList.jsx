import React from 'react';

export default function ArticleList({posts}) {
  if (posts.length <= 0) {
    return NoArticlesYet()
  }

  return (
    <ul className="space-y-2 list-none p-0">
      {posts.map((post) => <Post post={post} key={post.slug}/>)}
    </ul>
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
    <li>
      <br/>
      <a href={`/blog/posts/${post.slug}/`}>
        <p className="text-gray-400"><time dateTime={post.publishedDate}>{post.formattedDate}</time> – ☕ {post.readingTimeText}</p>
        <h2 className="text-3xl font-extrabold my-1.5 underline decoration-sky-500 hover:decoration-4">{post.title}</h2>
        <p>{post.excerpt}</p>
      </a>
    </li>
  );
}
