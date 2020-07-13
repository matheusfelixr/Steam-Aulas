import React from 'react'
import './index.css';

function ValidateInputText(props) {
    return (
        <div className="containerValidateInputText">
            {props.isAppear != "" && <span className="color" >{props.text}</span>}
        </div>
    );
}

export default ValidateInputText;