import React from 'react';
import './Input.css';

const Input = ({...props}) => {
    return (
        <input {...props} className='add__input'/>
    );
};

export default Input;