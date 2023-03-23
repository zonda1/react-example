import React,{useState} from 'react';
import AddButton from './UI/Add_button/Add_button';
import Input from './UI/Inputs/Input';


const FormNews = ({func}) => {

    const [post, setPost] = useState({ title: '', descr: '' });


    const createPost=()=> {
        const newPost={id:Date.now(),title: post.title, descr: post.descr};
        func(newPost);
        setPost({ title: '', descr: '' });
    }

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
          placeholder='Topic descr'
          value={post.descr}
          onChange={(e) => setPost({ ...post, descr: e.target.value })}
        />
        <AddButton onClick={createPost}>Add topic</AddButton>
      </div>
    );
};

export default FormNews;