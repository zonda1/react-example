import React from 'react';
import News from './News';

const NewsList = ({ posts, remove }) => {
  if (!posts.length) {
    return (
      <h2 style={{ fontSize: '20px', fontWeight: '600' }}>Posts not found</h2>
    );
  }
  return (
    <div>
      <h2>List of posts</h2>
      {posts.map((post, index) => (
        <News
          remove={remove}
          number={post.id}
          post={post}
          key={post.id}
        ></News>
      ))}
    </div>
  );
};

export default NewsList;
