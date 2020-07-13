import React from 'react'
import'./index.css';
import ValidateInputText from '../../components/ValidateInputText';

function MyInputText(props) {
    return (
        <div>
            <div className="container-label">
                <label>{props.label}</label>
            </div>
            <input type="text" name={props.name} value={props.value} onChange={props.onChange}></input>
            <ValidateInputText text={props.validateInputText} isAppear={props.isValidateInput}/>
        </div>
    );
}

export default MyInputText;