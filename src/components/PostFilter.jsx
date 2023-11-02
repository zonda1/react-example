import React from 'react';
import Input from './UI/Inputs/Input';
import MySorting from './UI/Sorting/MySorting';

const PostFilter = ({filter,setFilter}) => {
  return (
    <div>
      <Input
        value={filter.query}
        placeholder='Search...'
        onChange={(e) => setFilter({...filter,query:e.target.value})}
      ></Input>
      <MySorting
        deafaultValue='Sorting'
        options={[
          { value: 'title', name: 'By title' },
          { value: 'body', name: 'By description' },
        ]}
        value={filter.sort}
        onChange={sort=>setFilter({...filter,sort:sort})}
      ></MySorting>
    </div>
  );
};

export default PostFilter;
