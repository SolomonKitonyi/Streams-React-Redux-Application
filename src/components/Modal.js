import React from 'react';
import ReactDom from 'react-dom';

import history from '../history';

const Modal = props =>{
    return ReactDom.createPortal(
        <div onClick={()=>history.push('/')} className="ui dimmer modals visible active">
            <div onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    Are you sure you want to delete this Stream?
                </div>
                <div className="actions">
                    <button className="ui button primary">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
};

export default Modal;
