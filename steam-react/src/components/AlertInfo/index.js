import React from 'react'
import { AlertComponent } from './css'

function AlertInfo(props) {
    return (
        <div>  
         {props.show  &&
            <AlertComponent variant={props.variant} onClose={false}>
                <AlertComponent.Heading>{props.textHeading}</AlertComponent.Heading>
                <p>
                    {props.textBody}
                </p>
            </AlertComponent> }
            </div>
        );
}
export default AlertInfo;