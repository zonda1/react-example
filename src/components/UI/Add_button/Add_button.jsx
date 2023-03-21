import React from 'react';
import classes from "./Add_button.module.css";

const Add_button = ({...props}) => {
    return (
        <button {...props} className={classes.add__button}></button>
    );
};

export default Add_button;