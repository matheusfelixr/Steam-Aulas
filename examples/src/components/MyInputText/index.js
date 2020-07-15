import React from 'react'
import ValidateInputText from '../../components/ValidateInputText';
import {ContainerLabel} from './css'
import {Label} from './css'
import {Input} from './css'

function MyInputText(props) {
    return (
        <div>
            <ContainerLabel>
                <Label>{props.label}</Label>
            </ContainerLabel>
            <Input type="text" name={props.name} value={props.value} onChange={props.onChange}></Input>
            <ValidateInputText text={props.validateInputText} isAppear={props.isValidateInput}/>
        </div>
    );
}

export default MyInputText;