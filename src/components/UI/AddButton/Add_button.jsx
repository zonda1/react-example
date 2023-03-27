import React from 'react';
import classes from "./Add_button.module.css";

const AddButton = ({...props}) => {
    return (
        <button {...props} className={classes.add__button}></button>
    );
};

export default AddButton;