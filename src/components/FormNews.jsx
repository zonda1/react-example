import React, { useState } from 'react';
import Modal from './Modal/Modal';
import AddButton from './UI/AddButton/Add_button';
import Input from './UI/Inputs/Input';

const FormNews = ({ func }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const createPost = () => {
    const newPost = { id: Date.now(), title: post.title, body: post.body };
    func(newPost);
    setPost({ title: '', body: '' });
  };
  
  return (
      <div className='add__block'>
      <Input
        type='text'
        placeholder='Topic title'
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        type='text'
        placeholder='Topic body'
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <AddButton onClick={createPost}>Add topic</AddButton>
    </div>
  );
};

export default FormNews;
