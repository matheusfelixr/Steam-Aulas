import React from 'react'
import {Alert}  from  'react-bootstrap'

function AlertInfo(props) {
    return (
        <div>  
         {props.show  &&
            <Alert variant={props.variant} onClose={false}>
                <Alert.Heading>{props.textHeading}</Alert.Heading>
                <p>
                    {props.textBody}
                </p>
            </Alert> }
            </div>
        );
}
export default AlertInfo;