import React from 'react';

const Modal = (props) => {
    const showClass = props.modalView ? 'show' : 'hide';
    return (
        <div
            className={`project-modal ${showClass}`}
            onClick={props.closeModal}
        >
            <span>Hi!</span>
        </div>
    );
}

export default Modal;
