import React, { useState } from 'react';
import { useMemo } from 'react';
import './App.css';
import FormNews from './components/FormNews';

import NewsList from './components/NewsList';
import PostFilter from './components/PostFilter';
import Input from './components/UI/Inputs/Input';
import MySorting from './components/UI/Sorting/MySorting';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Abc', descr: 'Some descr 1' },
    { id: 3, title: 'Tit', descr: 'Descr 2' },
    { id: 4, title: 'Le2', descr: 'scr 2' },
    { id: 5, title: 'Kbr', descr: 'me4' },
  ]);

  const [filterPost, setFilterPost] = useState({ query: '', sort: '' });

  const sortedTopics = useMemo(() => {
    // console.log('Hook 1 worked');
    if (filterPost.sort) {
      console.log(filterPost.sort);

      return [...posts].sort((a, b) =>
        a[filterPost.sort].localeCompare(b[filterPost.sort])
      );
    }
    return posts;
  }, [filterPost.sort, posts]);

  const filterdTopics = useMemo(() => {
    // console.log('Hook 2 worked');
    return sortedTopics.filter((t) =>
      t.title.toLowerCase().includes(filterPost.query)
    );
  }, [filterPost.query, sortedTopics]);

  // console.log(filterdTopics);

  const addTopic = (post) => {
    setPosts([...posts, post]);
  };

  const dealeateTopic = (postId) =>
    setPosts(posts.filter((p) => postId !== p.id));

  return (
    <div className='App'>
      <h1>Newspaper</h1>
      <FormNews func={addTopic}></FormNews>
      <PostFilter filter={filterPost} setFilter={setFilterPost}></PostFilter>
      <hr style={{ marginBottom: '10px', border: '2px solid #000' }}></hr>

      <NewsList remove={dealeateTopic} posts={filterdTopics}></NewsList>
    </div>
  );
}

export default App;
