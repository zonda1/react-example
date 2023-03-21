import React, { useState } from 'react';
import './App.css';
import Form_news from './components/Form_news';

import News from './components/News';
import MySorting from './components/UI/Sorting/MySorting';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Abc', descr: 'Some descr 1' },
    { id: 3, title: 'Tit', descr: 'Descr 2' },
    { id: 4, title: 'Le2', descr: 'scr 2' },
    { id: 5, title: 'Kbr', descr: 'me4' },
  ]);

  const [currentOptionValue, setCurrentOptionValue] = useState('');

  const sortTopics = (sort) => {
    setCurrentOptionValue(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const addTopic = (post) => {
    setPosts([...posts, post]);
  };

  const dealeateTopic = (postId) =>
    setPosts(posts.filter((p) => postId !== p.id));

  return (
    <div className='App'>
      <h1>Newspaper</h1>
      <Form_news func={addTopic}></Form_news>
      <MySorting
        deafaultValue='Sorting'
        options={[
          { value: 'title', name: 'By title' },
          { value: 'descr', name: 'By description' },
        ]}
        value={currentOptionValue}
        onChange={sortTopics}
      ></MySorting>
      {posts.map((post, index) => (
        <News
          func={dealeateTopic}
          number={index + 1}
          post={post}
          key={post.id}
        ></News>
      ))}
    </div>
  );
}

export default App;
