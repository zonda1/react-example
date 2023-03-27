import React from 'react';
import cl from './Modal.module.css';


const Modal = ({children,visible,setVisible}) => {
    const rootClasses=[cl.modal__wrapper];

    if (visible) {
        rootClasses.push(cl.modal__active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={cl.modal} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;   