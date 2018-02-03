import React from 'react';

const Modal = (props) => {
    const showClass = props.modalView ? 'show' : 'hide';
    const project = props.project;
    return (
        <div
            className={`project-modal ${showClass}`}
            onClick={props.closeModal}
        >
            <div className="modal__content">
                <h2>{ project.title }</h2>
            </div>
        </div>
    );
}

export default Modal;
